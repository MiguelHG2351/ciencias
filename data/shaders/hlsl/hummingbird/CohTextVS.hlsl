/*
This file is part of Renoir, a modern graphics library.

Copyright (c) 2012-2016 Coherent Labs AD and/or its licensors. All
rights reserved in all media.

The coded instructions, statements, computer programs, and/or related
material (collectively the "Data") in these files contain confidential
and unpublished information proprietary Coherent Labs and/or its
licensors, which is protected by United States of America federal
copyright law and by international treaties.

This software or source code is supplied under the terms of a license
agreement and nondisclosure agreement with Coherent Labs AD and may
not be copied, disclosed, or exploited except in accordance with the
terms of that agreement. The Data may not be disclosed or distributed to
third parties, in whole or in part, without the prior written consent of
Coherent Labs AD.

COHERENT LABS MAKES NO REPRESENTATION ABOUT THE SUITABILITY OF THIS
SOURCE CODE FOR ANY PURPOSE. THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT
HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
MERCHANTABILITY, NONINFRINGEMENT, AND FITNESS FOR A PARTICULAR PURPOSE
ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER, ITS AFFILIATES,
PARENT COMPANIES, LICENSORS, SUPPLIERS, OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
ANY WAY OUT OF THE USE OR PERFORMANCE OF THIS SOFTWARE OR SOURCE CODE,
EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

#include "../ShaderConstants.fxh"

struct VS_Input {
	float3 Position : POSITION_3;
	float4 Color : COLOR_4;
	float4 Additional : ADDITIONAL;
};

struct PS_Input {
	float4 Position : SV_Position; // Why not position3
	float4 Color : VS_SEMANTIC_COLOR;
	float4 Additional: TEXCOORD0;
	float3 ScreenNormalPosition : TEXCOORD1;
};

float4 CoherentMul(float4 vec, float4x4 mat) {
    return mul(vec, mat);
}

float4 CoherentPosition(float3 pos) {
    return float4(pos, 1);
}

void main(in VS_Input VSInput, out PS_Input PSInput) {
	PSInput.Position = CoherentMul(CoherentPosition(VSInput.Position), TRANSFORM);
	PSInput.ScreenNormalPosition = VSInput.Position;

	// Translate to -1..1 with perspective correction
	float w = PSInput.Position.w;
	PSInput.Position.x = PSInput.Position.x * 2 - w;
	PSInput.Position.y = (w - PSInput.Position.y) * 2 - w;

	PSInput.Color = VSInput.Color;
	PSInput.Additional = VSInput.Additional;
}
