#ifdef GL_ES
#define LOWP lowp
precision mediump float;
#else
#define LOWP
#endif

varying LOWP vec2 v_xy;

uniform sampler2D u_texture;
uniform mat3 u_mat3; //rotation matrix
uniform vec3 u_uv;   //center of the texture & length of the texture
uniform vec3 u_light;

void main(){
    float size = dot(v_xy, v_xy);
    if(size > 1.2) discard;
	else if(size > 1.0) gl_FragColor = vec4(0,0,0,1); //outline
	else {
	    vec3 val3 = vec3(v_xy.xy, sqrt(1.0-size));
		float diffuse = dot(val3, u_light);
		val3 *= u_mat3;
		if(val3.z < 0.0) val3.x *= -1.0; //flip the texture if on the bottom of the ball
		gl_FragColor = vec4(texture2D(u_texture, val3.xy * u_uv.z + u_uv.xy ).rgb * (diffuse * .8 + 0.2)
		       + pow(diffuse, 16.0) * 0.8 + .02, 1.0);
	}
}