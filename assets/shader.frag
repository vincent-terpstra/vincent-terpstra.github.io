//"in" attributes from our vertex shader
#ifdef GL_ES
    #define LOWP lowp
       precision mediump float;
#else
    #define LOWP
#endif

varying LOWP vec4 v_color;
varying vec2 v_texCoords;

//declare uniforms
uniform sampler2D u_texture;

void main() {
	vec4 clr = v_color * texture2D(u_texture, v_texCoords);
	gl_FragColor = clr.brga;
}