var linkTextSize = 12;

$(document).ready(function(){
    console.log("reduceText.js called");
    if(readCookie("linkTextSize")){
	  linkTextSize = parseInt(readCookie("linkTextSize")) / 1.25;
	}
  iterateThroughLinks();
  createCookie("linkTextSize", linkTextSize);
});



function reduceTextSize(link){
  link.style.fontSize = linkTextSize + "px";
}

function iterateThroughLinks(){
	console.log("reducing text size")
	for(var i = 0; i < document.links.length ; i++){
		reduceTextSize(document.links[i]);
	}
	linkTextSize = linkTextSize / 1.25;
}


 /*
  creates cookies
  @param {String} name -  of coookie
  @param {String} valie - value of coookie
  @param {number} days -  number of days for coookie to stay active
  */
function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

  /*
  creates cookies
  @param {String} name -  of coookie
  @return {String} valie - value of coookie
  */

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

  /*
  * erases cookies
  * @param {String} name -  of coookie
  */
function eraseCookie(name) {
  createCookie(name,"",-1);
}


