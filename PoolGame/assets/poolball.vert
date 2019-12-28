attribute vec4 a_position;
attribute vec4 a_color;
attribute vec2 a_texCoord0;

uniform mat4 u_projTrans;
uniform vec3 u_pos;

varying vec2 v_xy;

void main()
{
    v_xy = (a_position.xy - u_pos.xy) / u_pos.z;
    v_xy.y *= -1.0;
	gl_Position =  u_projTrans * a_position;
}