function prepareDrinks(){
	if(!document.getElementsByTagName||document.getElementById||
		!document.getElementById("drinks"))  return false;
	var drinks = document.getElementById("drinks");
	var links = drinks.getElementsByTagName("a");
	for(var i = 0; i < links.length; i++){
		links[i].onclick = function(){
			showPic(this);
			return false;
		}
	}
		
}