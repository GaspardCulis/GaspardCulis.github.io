// Credits : https://www.shadertoy.com/view/WdBXD1 , https://youtu.be/f4s1h2YETNY

#include <common>

uniform vec3 iResolution;
uniform float iTime;
uniform sampler2D iChannel0;
uniform float iProgress;

float seed = 0.14;

float dripDistance = 0.1;
float density = 0.75;

float bCurve = 1.5;
float bFreq = 3.5;
float bRange = 0.35;

float fallSpeed = 6.0;

float sdfWidth = 0.18;

vec3 palette( float t ) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.14, 0.42, 0.667);
    

    return a * b*cos( 6.28318*(c*t+d) );
}

float rand( float x, float y ){
    return texture( iChannel0, vec2(x,y) / (iResolution.x / iResolution.y) ).r;
}

float dripSDF( vec2 uv )
{   
    float s = sdfWidth * abs((1.0-uv.y)-0.75) + 0.05;
    float o = 1.0;
    float drip = 999.0;
    
    float x = uv.x - sdfWidth;
    x += dripDistance - mod(x, dripDistance);
    
    x -= dripDistance; //ungh... this is dirty... I'll fix it later
    for( int i=0; i<1000; i++ )
    {
        if( x > uv.x + sdfWidth ) break;
        
        x += dripDistance;
        float isLine = round(rand(x, seed) + density-0.5);
        if( isLine == 0.0 ) continue;
        
        float y = rand(seed,x) * 0.8 + 0.1;
        //y *= abs(sin(x*3.0))*0.5 + 0.5;
        float animTime = iTime+(y*10.0);
        float bounce = 0.0 - (bCurve * mod(animTime, bFreq)) * exp(1.0-bCurve*mod(animTime, bFreq));
        y += bounce * bRange;
        y = min(y,uv.y);
        
        float f = y + mod(animTime, bFreq) * fallSpeed * bRange;
        
        //float d = min( distance(vec2(x,y),uv), distance(vec2(x,f),uv) );
        float d = distance(vec2(x,y),uv);
        
        o *= clamp(d/s,0.0,1.0);
        drip = min( drip, distance(vec2(x,f),uv) );
    }
    
    o = min( o, clamp(drip/s,0.0,1.0) );
    
    s = sin(uv.x*20.0+ iTime * 0.2)*0.3 + 0.4;
    return o * clamp(distance(0.0, uv.y)/s,0.0,1.0);
}

vec3 psyColor( vec2 fragCoord ) {
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = (fragCoord * 2.0 - iResolution.xy)/iResolution.y;
    vec2 uv0 = uv;
    vec3 finalColor = vec3(0.0);
    
    for (float i = 0.0; i < 4.0; i++) {
        uv = fract(uv * 1.5) - 0.5;

        float d = length(uv) * exp(-length(uv0));
        vec3 col = palette(length(uv0) + (i + iTime) * .4);

        d = sin(d * 8. + iTime) / 8.;
        d = abs(d);

        d = pow((0.1 / (iProgress * 8.0 + 1.))/d, 1.2);

        finalColor += col * d;
    }

    return finalColor;
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = fragCoord/iResolution.xy;
    uv.x *= iResolution.x / iResolution.y; //square
    uv.y = 1.0 - uv.y; //flip
    
    float c = 1.0/sdfWidth * 0.025;
    float w = 0.03;
    
    uv.y -= (iProgress * 6.0 - 1.);
    float d = dripSDF(uv);
    
    float smoth = 1.0 - smoothstep( c - w, c + w, d );

    vec3 color = psyColor(fragCoord) * smoth;
    
    float alpha = 1.0;
    if (length(color.rbg) == 0.0) {
        alpha = 0.0;
        color = vec3(1.0);
    }

    color = vec3(1.0 - min(iProgress * 4.0, 1.0)) - color;
    
    
    fragColor = vec4(color, alpha);
}

void main() {
  mainImage(gl_FragColor, gl_FragCoord.xy);
}
