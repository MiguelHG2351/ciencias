#if !defined(TEXEL_AA) || !defined(TEXEL_AA_FEATURE)
#define USE_TEXEL_AA 0
#else
#define USE_TEXEL_AA 1
#endif

#ifdef ALPHA_TEST
#define USE_ALPHA_TEST 1
#else
#define USE_ALPHA_TEST 0
#endif

#if __VERSION__ >= 300

#include "shaders/uniformShaderConstants.h"

#if USE_TEXEL_AA

const float TEXEL_AA_ALPHA_BIAS = 0.125;
const float TEXEL_AA_EPSILON = 0.03125;

const float TEXEL_AA_LOD_MIN = -0.5;
const float TEXEL_AA_LOD_MAX = 0.0;

vec4 texture2D_AA(in sampler2D source, in highp vec2 originalUV) {

	highp vec2 dUV_dX = dFdx(originalUV) * TEXTURE_DIMENSIONS.xy;
	highp vec2 dUV_dY = dFdy(originalUV) * TEXTURE_DIMENSIONS.xy;

	highp vec2 delU = vec2(dUV_dX.x, dUV_dY.x);
	highp vec2 delV = vec2(dUV_dX.y, dUV_dY.y);

	highp vec2 gradientMagnitudes = vec2(length(delU), length(delV));

	highp vec2 fractionalTexel = fract(originalUV * TEXTURE_DIMENSIONS.xy);
	highp vec2 integralTexel = floor(originalUV * TEXTURE_DIMENSIONS.xy);

	highp vec2 scalar = max(1.0 / max(gradientMagnitudes, vec2(TEXEL_AA_EPSILON)), 1.0);

	highp vec2 adjustedFractionalTexel = clamp(fractionalTexel * scalar, 0.0, 0.5) + clamp(fractionalTexel * scalar - (scalar - 0.5), 0.0, 0.5);
	highp vec2 adjustedUV = (adjustedFractionalTexel + integralTexel) / TEXTURE_DIMENSIONS.xy;

	// Determine mip map LOD
	highp float largestDerivativeSquare = max(dot(dUV_dX, dUV_dX), dot(dUV_dY, dUV_dY));	
	highp float lod = log2(sqrt(largestDerivativeSquare) * 2.0);

	highp float t = smoothstep(TEXEL_AA_LOD_MIN, TEXEL_AA_LOD_MAX, lod);
	lowp vec4 sampledColor = texture2D(source, mix(adjustedUV, originalUV, t));


	#if USE_ALPHA_TEST
		return vec4(sampledColor.rgb, mix(floor(pow(sampledColor.a + TEXEL_AA_ALPHA_BIAS, 2.0)), sampledColor.a, t));
	#else
		return sampledColor;
	#endif
}

#endif // USE_TEXEL_AA

#endif //__VERSION__ >= 300
