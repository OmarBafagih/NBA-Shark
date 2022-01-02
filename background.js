chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
    console.log("hello");

    //run js script to populate pop-up screen
    chrome.tabs.executeScript(null, {file: "main_page.js"});

    


}

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    if(message.popupOpen) { 
        console.log("WORKS");

        //getting live games
        fetch('https://www.balldontlie.io/api/v1/games').then(r => r.text()).then(result => {
            console.log(result);
            sendResponse(result);
        });
     }
  });



