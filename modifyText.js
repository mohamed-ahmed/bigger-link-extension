$(document).ready(function(){
    console.log("modifyText.js called");
    iterateThroughLinks();
});



function increaseTextSize(link){
  link.style.fontSize = "20px";
}

function iterateThroughLinks(){
  for(var i = 0; i < document.links.length ; i++){
    increaseTextSize(document.links[i]);
  }
}