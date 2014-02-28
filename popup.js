console.log("hello");

$(document).ready(function(){
  $("#setSizeButton").click(function(){
    chrome.tabs.executeScript(null, {file: "modifyText.js"});
    console.log("clicked button");
  });
});

