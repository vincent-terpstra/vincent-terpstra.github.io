attribute vec2 a_xy;

uniform mat2 u_mat;
uniform vec2 u_loc;

varying vec2 v_xy; //used to draw circles

void main(){
   v_xy = a_xy;
   gl_Position = vec4(u_mat * (a_xy + u_loc), 1.0, 1.0);
}