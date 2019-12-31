---
title : "A* PathFinder"
date: 2019-12-25
tags: [libgdx, Algorithm, AI]
excerpt: "A* Pathfinder on Hexogonal Grid"
source: "PathFinding"
icon:    "alphastar"
---
A* Pathfinding **algorithm** implemented on a hexogonal grid
<script src="soundmanager2-setup.js" id="setup"></script>
<script src="soundmanager2-jsmin.js" id="jsmin"></script>
<div id="embed-html" display="inline-block"></div>

<script type="text/javascript" src="/PathFinder/html.nocache.js"></script>

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
**(click on map)** set path  
**(drag map)** move map  
**(drag object)** move object  
  
**Hexogonal grid** - every object has coordinates x,y,z | z =-(x+y)  
**Quad Tree** - the map is organized in parent nodes with 4 child branchs. Each child is either a node or a container for objects. As the map is explored new chunks are randomly generated and added to the tree.  
<b>A* Pathfinding Algorithm</b> - finds the quickest route between two points using a distance heuristic  

