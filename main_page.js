images = {'Phoenix': "https://content.sportslogos.net/logos/6/238/thumbs/23843702014.gif", "Dallas": "https://content.sportslogos.net/logos/6/228/thumbs/22834632018.gif"}

window.onload = function() { 
    getLiveGames();
}


function getLiveGames(){
    let container = document.getElementById("liveGames");
    

    req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if(req.readyState == XMLHttpRequest.DONE){
            let liveGames = JSON.parse(req.responseText);
            console.log(liveGames.games);
			for(let i = 0; i < liveGames.games.length; i++){
                console.log(liveGames.games[i]);
                console.log(liveGames.games[i].game);
                //creating elements for each game
                let gameLI = document.createElement("li");
                gameLI.className = "gameLI"

                let gameDiv = document.createElement("div");
                gameDiv.id = 'liveGames.games[i].game'
                gameDiv.className = "gameDiv"


                
                for(const key in images){
                    if(liveGames.games[i].home.includes(key)){
                        let teamHDiv = document.createElement("div");
                        teamHDiv.id = "homeDiv";

                        let teamHome = document.createElement("img");
                        teamHome.src = images[key];
                        teamHDiv.appendChild(teamHome);
                        
                        let teamHomeP = document.createElement("p");
                        teamHomeP.textContent = key;
                        teamHomeP.className = "city"
                        teamHDiv.appendChild(teamHomeP);

                        gameDiv.appendChild(teamHDiv);
                    }
                }

                let gameStatus = document.createElement("p");
                gameStatus.textContent = liveGames.games[i].game;
                gameStatus.className = "gameStatus";
                gameDiv.appendChild(gameStatus);

                for(const key in images){
                    if(liveGames.games[i].away.includes(key)){
                        let teamADiv = document.createElement("div");
                        teamADiv.id = "awayDiv";

                        let teamAway = document.createElement("img");
                        teamAway.src = images[key];
                        teamADiv.appendChild(teamAway);
                        
                        let teamAwayP = document.createElement("p");
                        teamAwayP.textContent = key;
                        teamAwayP.className = "city"
                        teamADiv.appendChild(teamAwayP);


                        gameDiv.appendChild(teamADiv);
                    }
                }

                

                gameLI.appendChild(gameDiv)
                container.appendChild(gameLI);
                
            }
	    }
        
    }
					
	req.open("GET", `https://young-basin-92734.herokuapp.com/livegames`);
	req.setRequestHeader("Content-Type", "application/json");
	req.send();
    
    
}







