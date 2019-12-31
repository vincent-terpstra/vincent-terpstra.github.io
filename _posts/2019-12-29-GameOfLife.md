---
title : "Conway's Game of Life"
date: 2019-12-27
tags: [opengl, pixels]
excerpt: "Cellular Automaton"
source: "gameOfLife"
icon: "conway"
---

**Conway's Game of Life** is a <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" >cellular automaton!</a>
Each new image is generated from the previous with a few simple rules:
+ Each <span style="color: green;"> live </span> cell with two or three <span style="color: green;"> live </span> neighbours remains <span style="color: green;"> alive </span>
+ Each <span style="color: red;"> dead </span> cell with three <span style="color: green;"> live </span> neighbours becomes <span style="color: green;"> alive </span>
+ All other cells become <span style="color: red;"> dead </span>

<script src="soundmanager2-setup.js" id="setup"></script>
<script src="soundmanager2-jsmin.js" id="jsmin"></script>
<div id="embed-html" display="inline-block"></div>

<script type="text/javascript" src="/GameOfLife/html.nocache.js"></script>

<script>
  function handleMouseDown(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    evt.target.style.cursor = 'default';
    window.focus();
  }

  function handleMouseUp(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    evt.target.style.cursor = '';
  }
  document.getElementById('embed-html').addEventListener('mousedown', handleMouseDown, false);
  document.getElementById('embed-html').addEventListener('mouseup', handleMouseUp, false);
</script>
**(click)** place pattern  
**(scroll)** change pattern  
**(+/-)** change speed (limited by refresh rate)  

### Shader.frag
~~~
varying vec4 v_color;
varying vec2 v_texCoords;

uniform sampler2D u_texture;

void main()
{
  vec3 shift = vec3(1.0/240.0, 0, - 1.0/240.0);
  float live = texture2D(u_texture, v_texCoords).r;

  float neighbours = 0.0;

 neighbours += texture2D(u_texture, v_texCoords + shift.xy).r;
 neighbours += texture2D(u_texture, v_texCoords - shift.xy).r;
	
 neighbours += texture2D(u_texture, v_texCoords + shift.yx).r;
 neighbours += texture2D(u_texture, v_texCoords - shift.yx).r;
	
 neighbours += texture2D(u_texture, v_texCoords + shift.xx).r;
 neighbours += texture2D(u_texture, v_texCoords - shift.xx).r;
	
 neighbours += texture2D(u_texture, v_texCoords + shift.xz).r;
 neighbours += texture2D(u_texture, v_texCoords - shift.xz).r;

  if((live == 1.0 && (neighbours == 3.0 || neighbours == 2.0)) 
   ||(live == 0.0 && neighbours == 3.0)){
     gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
   } else {
     gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
   }
}
~~~
