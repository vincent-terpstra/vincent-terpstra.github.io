---
title : "Connect Four"
date: 2019-12-25
tags: [libgdx, Algorithm, AI]
excerpt: "A Connect Four game and Backtracking AI"
source: "ConnectFour"
---

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
