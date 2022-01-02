

window.onload = function() { 
    console.log("do whatever you want here !!!");
    getLiveGames();
}


function getLiveGames(){
    let container = document.getElementById("liveGames");
    let game = document.createElement("li");
    
    
    chrome.runtime.sendMessage({popupOpen: true}, function(response){
        //game.textContent = response.liveGames;
        container.appendChild(game);
        console.log(response);
    });
    console.log("helloooo");
    
}







