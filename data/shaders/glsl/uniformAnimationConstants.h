#ifndef _UNIFORM_ANIMATION_CONSTANTS_H
#define _UNIFORM_ANIMATION_CONSTANTS_H

#include "shaders/uniformMacro.h"

#ifdef MCPE_PLATFORM_NX
layout(binding = 4) uniform AnimationConstants {
#endif
// BEGIN_UNIFORM_BLOCK(AnimationConstants) - unfortunately this macro does not work on old Amazon platforms so using above 3 lines instead
UNIFORM MAT4 BONES[8];
END_UNIFORM_BLOCK

#endif
