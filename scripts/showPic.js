function showPic(whichpic){
	var source = whichPic.getAttribute("href")
	var drinks = document.getElementById("drinks")
	drinks.setAttribute("src", source)
}
function countBodyChildren(){
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length);
}
window.onload = countBodyChildren;

