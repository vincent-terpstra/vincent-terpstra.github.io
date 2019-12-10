
window.onload = function(){
    //load app one
    setApp(0);
}

function setApp(index){
	var appIndex = appData[index];
	remove();
	document.querySelector("#app-title").innerHTML = appIndex.name;
	document.querySelector("#app-desc").innerHTML = appIndex.desc;
	

	var script = document.createElement("script");
	script.type="text/javascript"
	var path = appIndex.path + "/html.nocache.js";
	script.src = path;
	script.id = "scriptID";

	document.querySelector("#embed-html").innerHTML = "";
	document.body.appendChild(script);

	document.getElementById('gameViewport').setAttribute('content',
                 'width=device-width initial-scale=' + 1/window.devicePixelRatio);

              function handleMouseDown(evt) {
                evt.preventDefault();
                evt.stopPropagation();
                window.focus();
              }

              function handleMouseUp(evt) {
                evt.preventDefault();
                evt.stopPropagation();
              }
              document.getElementById('embed-html').addEventListener('mousedown', handleMouseDown, false);
              document.getElementById('embed-html').addEventListener('mouseup', handleMouseUp, false);
}

function remove(){
	var last = document.head.lastChild;
	document.head.removeChild(last);

	var scr = document.getElementById("scriptID");
	if(scr != null)
		document.body.removeChild(scr);
	
	scr = document.getElementById("html");
	if(scr != null)
		document.body.removeChild(scr);
}