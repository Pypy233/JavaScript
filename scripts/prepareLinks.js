window.onload = prepareLinks;
function prepareLinks(){
	var links = document.getElementsByTagName("a");
	for(var i = 0; i < links.length; i++){
		if(links[i].getAttribute("class") == "popUp"){
			links[i].onclick = function(){
				popUp(this.attribute("href"));
				return false;
			}
		}
	}
}

function popUp(winURL){
	window.open(winURL, "popUp", "width = 320, height = 480");
}