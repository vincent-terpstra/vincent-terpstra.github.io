
window.onload = function(){
    //load app one
    setApp(1);
}

function setApp(index){
	var appIndex = appData[index];

	document.querySelector("#app-title").innerHTML = appIndex.name;
	document.querySelector("#app-desc").innerHTML = appIndex.desc;
	

	var script = document.createElement("script");
	script.type="text/javascript"
	var path = appIndex.path + "/html.nocache.js";
	script.src = path;
	
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

function filter(type){
    filterType = type;
    if(type == ""){
        // will load the table
        filterRange(0, Number.MAX_VALUE);
    } else {
        loadTableWithFilters();
    }
}

function filterRange(lower, upper){
    filterAgeMin = lower;
    filterAgeMax = upper;
    loadTableWithFilters();
}

function loadTableWithFilters(){
    var element = document.querySelector("#main-table-body");
    element.innerHTML = "";
    petData.forEach(
    function (pet)
        {
            if((pet.type == filterType || filterType == "") && 
                (pet.age >= filterAgeMin && pet.age < filterAgeMax)){

                var img = document.createElement("img");
                var image = pet.image;
                for(attr in image) //load image attributes
                    img.setAttribute(attr, image[attr]);
            
                var paragraph = document.createElement("p");
                    paragraph.innerHTML = pet.description;
                element.appendChild(
                    cascade("tr", 
                        cascade("td", img),
                        cascade("td", 
                            cascade("h4",   document.createTextNode(pet.name)), 
                            paragraph, 
                            cascade("span", document.createTextNode("Age: " + pet.age + " years old."))
                        )
                    )
                )
            }
       }
    );
}

//Function to load a parent element with children elements
function cascade(parentTag /*child element(s)*/){
    var parent = document.createElement(parentTag);
    var i = 1;
    while(i < arguments.length){
        parent.appendChild(arguments[i++]);
    }
    return parent;
}

