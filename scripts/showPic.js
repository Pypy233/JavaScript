function showPic(whichpic){
	var source = whichPic.getAttribute("href")
	var drinks = document.getElementById("drinks")
	drinks.setAttribute("src", source)
}