---
title : "Connect Four"
date: 2019-12-25
tags: [libgdx, Algorithm, AI, Java]
excerpt: "A Connect Four game and Backtracking AI"
source: "ConnectFour"
icon: "connectfour"
---

<span style="color: gold; "><b> GoldAI </b></span> is a backtracking **algorithm**.
This algorithm uses **recursion** and the stack
to remember and test each possible board state.  
Originally a in-class assignment using JavaFX; this project became a self-taught lesson in AI, backtracking algorithms, path reduction, and heuristics.

<script src="soundmanager2-setup.js" id="setup"></script>
<script src="soundmanager2-jsmin.js" id="jsmin"></script>
<div id="embed-html" display="inline-block"></div>

<script type="text/javascript" src="/ConnectFour/html.nocache.js"></script>

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

**(LMB)** Play <span style="color: red;"> red </span> piece  
**(LMB && Game Over)** Reset board  
