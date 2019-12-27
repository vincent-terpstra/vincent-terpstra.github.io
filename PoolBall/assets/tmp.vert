attribute vec4 a_position;
attribute vec4 a_color;
attribute vec2 a_texCoord0;

uniform mat4 u_projTrans;

varying vec4 v_color;
varying vec2 v_texCoords;

varying vec2 v_xy;

void main()
{
	v_color = a_color;
    v_color.a = v_color.a * (255.0/254.0);
	v_texCoords = a_texCoord0;
	v_xy = (a_position.xy / 200.0 - 1.0) * 1.1;
	v_xy.y *= -1.0;
	gl_Position =  u_projTrans * a_position;
}