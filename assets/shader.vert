//combined projection and view matrix
uniform mat4 u_projTrans;

//"in" attributes from our SpriteBatch
attribute vec4 a_position;
attribute vec4 a_color;
attribute vec2 a_texCoord0;

//"out" varyings to our fragment shader
varying vec4 v_color;
varying vec2 v_texCoords;
 
void main() {
	v_color = a_color;
	v_texCoords = a_texCoord0;
	gl_Position = u_projTrans * a_position;
}