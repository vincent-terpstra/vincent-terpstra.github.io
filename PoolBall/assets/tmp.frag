#ifdef GL_ES
#define LOWP lowp
precision mediump float;
#else
#define LOWP
#endif

varying LOWP vec4 v_color;
varying vec2 v_texCoords;

varying vec2 v_xy;

uniform sampler2D u_texture;
uniform vec3 u_light;
uniform mat3 u_mat3; //rotation matrix
uniform vec3 u_uv;   //center of the texture & length of the texture

void main()
{
    float size = dot(v_xy, v_xy);

    if(size > 1.2) discard;
    else if(size > 1.0) gl_FragColor = vec4(0,0,0,1); //outline
    else {
        vec3 val3 = vec3(v_xy.xy, sqrt(1.0-size));
        float diffuse = dot(val3, u_light);
        val3 *= u_mat3;
        if(val3.z < 0.0)
            val3.x *= -1.0;

        vec4 clr = texture2D(u_texture, val3.xy * u_uv.z + u_uv.xy);
        gl_FragColor = vec4(clr.rgb * (diffuse * .8 + 0.2)
                       		       + pow(diffuse, 16.0) * 0.8 + .02, 1.0);
    }
}