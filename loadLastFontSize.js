console.log(window.location.toString());


var linkTextSize;

window.onload = function(){

	console.log("executing loadLastFontSize.js");


	if(readCookie("linkTextSize")){
		linkTextSize = parseInt(readCookie("linkTextSize"));
		iterateThroughLinks();
	}
	else{
		createCookie("linkTextSize","12");
	}

};