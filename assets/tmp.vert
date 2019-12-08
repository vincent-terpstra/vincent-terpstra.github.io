attribute vec4 a_position;
attribute vec4 a_color;
attribute vec2 a_texCoord0;

uniform mat2 u_mat
uniform vec2 u_loc;

varying vec4 v_color;
varying vec2 v_texCoords;

void main()
{
	v_color = a_color;
    v_color.a = v_color.a * (255.0/254.0);
	v_texCoords = a_texCoord0;
	gl_Position =  = vec4(u_mat * (a_xy + u_loc), 1.0, 1.0);
}