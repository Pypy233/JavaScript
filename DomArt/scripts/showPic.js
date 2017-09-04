function showPic(whichpic){
	if(!document.getElementById("drinks")) return false;
	var source = whichpic.getAttribute("href");
	var drinks = document.getElementById("drinks");
	drinks.setAttribute("src", source);
	if(document.getElementById("description")){
		var text = whichpic.getAttribute("title");
		var description = document.getElementById("description");
		description.firstChild.nodeValue = text;
	}
	return true;
}
function countBodyChildren(){
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length);
}
window.onload = countBodyChildren;

