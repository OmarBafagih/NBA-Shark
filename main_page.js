

window.onload = function() { 
    console.log("do whatever you want here !!!");
    getLiveGames();
}


function getLiveGames(){
    let container = document.getElementById("liveGames");
    let game = document.createElement("li");

    req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if(this.status==200){
            game.textContent = this.responseText;
			console.log(this.responseText);
			
	    }
    }
					
	req.open("GET", `https://young-basin-92734.herokuapp.com/livegames`);
	req.setRequestHeader("Content-Type", "application/json");
	req.send();

    
    chrome.runtime.sendMessage({popupOpen: true}, function(response){
        //game.textContent = response.liveGames;
        container.appendChild(game);
        console.log(response);
    });
    console.log("helloooo");
    
}







