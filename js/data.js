var appData = [
	{
		name:"PoolBall",
		path:"PoolBall",
		desc:"A poolball rendered with OpenGL</br>" +
		     "<b>Click</b> to rotate</br>" +
		     "<pre><b>shader.frag</b></br>"+
		     
		     "varying vec2 v_xy;</br></br>"
					
		+	"uniform sampler2D u_texture;</br>"
		+	"uniform mat3 u_mat3; //rotation matrix</br>"
		+	"uniform vec3 u_uv;   //center & length of the texture</br>"
		+ 	"uniform vec3 u_light;</br></br>"
		
		+	"void main(){</br>"
		+	"  float size = dot(v_xy, v_xy);</br>"
		+	"  if(size > 1.2) discard;</br>"
		+  "  else if(size > 1.0) gl_FragColor = vec4(0,0,0,1); //outline</br>"
		+  "  else {</br>"
		+  "    vec3 val3 = vec3(v_xy.xy, sqrt(1.0-size));</br>"
		+	"    float diffuse = dot(val3, u_light);</br>"
		+  "    val3 *= u_mat3;</br>"
		+  "    if(val3.z < 0.0) val3.x *= -1.0;</br>"
		+  "      //flip the texture if on the bottom of the ball</br>"
		+  "      vec4 clr = texture2D(u_texture,val3.xy * u_uv.z + u_uv.xy);</br>"
		+	"      gl_FragColor = vec4(clr.rgb * (.05 + diffuse) </br>"
		+ 	"      + pow(diffuse, 16.0), 1.0);</br>"
		+  "   }</br>"
		+	"}</pre>"
	},
	{
		name:"PathFinder",
		path:"PathFind",
		desc:"A * Pathfinding algorithm, on a Quad Tree map",
	},
	{
		name:"PoolGame",
		path:"PoolGame",
		desc:"Pool game using libGDX and OpenGL shaders",
	},
	{
		name:"Conway's Game Of Life",
		path:"GameOfLife",
		desc:"Cellular Automaton using OpenGL shaders</br>"
		+ "<b>Click</b> Add pattern</br>"
		   + "<b>Scroll</b> Change pattern</br>"
		   + "<b>(+/-)</b> Increase speed</br>"
		   + "<pre><b>shader.frag</b></br>" +
		   "varying vec4 v_color;</br>" +
        "varying vec2 v_texCoords;</br></br>" +

"uniform sampler2D u_texture;</br></br>" +

"void main()</br>" +
"{</br>" +
"  vec3 shift = vec3(1.0/240.0, 0, - 1.0/240.0);</br>" +
"  float live = texture2D(u_texture, v_texCoords).r;</br></br>" +
	
"  float neighbours = 0.0;</br>" +
	
"  neighbours += texture2D(u_texture, v_texCoords + shift.xy).r;</br>" +
"  neighbours += texture2D(u_texture, v_texCoords - shift.xy).r;</br>" +
	
"  neighbours += texture2D(u_texture, v_texCoords + shift.yx).r;</br>" +
"  neighbours += texture2D(u_texture, v_texCoords - shift.yx).r;</br>" +
	
"  neighbours += texture2D(u_texture, v_texCoords + shift.xx).r;</br>" +
"  neighbours += texture2D(u_texture, v_texCoords - shift.xx).r;</br>" +
	
"  neighbours += texture2D(u_texture, v_texCoords + shift.xz).r;</br>" +
"  neighbours += texture2D(u_texture, v_texCoords - shift.xz).r;</br></br>" +
	
"  if((live == 1.0 &&(neighbours == 3.0 || neighbours == 2.0))</br>" +
"   ||(live == 0.0 && neighbours == 3.0)){</br>" +
"      gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);</br>" +
"  } else {</br>" +
"      gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);</br>" +
"  }</br>" +
"}"
		   ,
	},
	
	{
		name:"Connect Four",
		path:"ConnectFour",
		desc:"A game of connect four vs <b>GoldAI</b></br>"
		+"<b>GoldAI</b> is a backtracking AI</br>"
		+"<b>Source</b>",
	},
	
	{
		name:"",
		path:"",
		desc:"",
	},
]
