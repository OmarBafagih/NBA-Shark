images = {'Phoenix': "https://content.sportslogos.net/logos/6/238/thumbs/23843702014.gif", "Dallas": "https://content.sportslogos.net/logos/6/228/thumbs/22834632018.gif"
,"Atlanta": "https://content.sportslogos.net/logos/6/220/thumbs/22081902021.gif",  "Boston": "https://content.sportslogos.net/logos/6/213/thumbs/slhg02hbef3j1ov4lsnwyol5o.gif"
, "Brooklyn": "https://content.sportslogos.net/logos/6/3786/thumbs/hsuff5m3dgiv20kovde422r1f.gif", "Charlotte": "https://content.sportslogos.net/logos/6/5120/thumbs/512019262015.gif"
, "Chicago": "https://content.sportslogos.net/logos/6/221/thumbs/hj3gmh82w9hffmeh3fjm5h874.gif", "Cleveland": "https://content.sportslogos.net/logos/6/222/thumbs/22269212018.gif",
"Denver": "https://content.sportslogos.net/logos/6/229/thumbs/22989262019.gif", "Detroit": "https://content.sportslogos.net/logos/6/223/thumbs/22321642018.gif"
, "Golden": "https://content.sportslogos.net/logos/6/235/thumbs/23531522020.gif", "Houston": "https://content.sportslogos.net/logos/6/230/thumbs/23068302020.gif"
, "Indiana": "https://content.sportslogos.net/logos/6/224/thumbs/22448122018.gif", "LAC": "https://content.sportslogos.net/logos/6/236/thumbs/23637762019.gif", 
"LAL": "https://content.sportslogos.net/logos/6/237/thumbs/uig7aiht8jnpl1szbi57zzlsh.gif", "Memphis": "https://content.sportslogos.net/logos/6/231/thumbs/23143732019.gif"
, "Miami": "https://content.sportslogos.net/logos/6/214/thumbs/burm5gh2wvjti3xhei5h16k8e.gif", "Milwaukee": "https://content.sportslogos.net/logos/6/225/thumbs/22582752016.gif"
, "Minnesota": "https://content.sportslogos.net/logos/6/232/thumbs/23296692018.gif", "New Orleans": "https://content.sportslogos.net/logos/6/4962/thumbs/496226812014.gif"
, "New York": "https://content.sportslogos.net/logos/6/216/thumbs/2nn48xofg0hms8k326cqdmuis.gif", "Oklahoma": "https://content.sportslogos.net/logos/6/2687/thumbs/khmovcnezy06c3nm05ccn0oj2.gif"
, "Orlando": "https://content.sportslogos.net/logos/6/217/thumbs/wd9ic7qafgfb0yxs7tem7n5g4.gif", "Philadelphia": "https://content.sportslogos.net/logos/6/218/thumbs/21870342016.gif"
, "Portland": "https://content.sportslogos.net/logos/6/239/thumbs/23997252018.gif", "Sacramento": "https://content.sportslogos.net/logos/6/240/thumbs/24040432017.gif"
, "San Antonio": "https://content.sportslogos.net/logos/6/233/thumbs/23325472018.gif", "Toronto": "https://content.sportslogos.net/logos/6/227/thumbs/22770242021.gif"
, "Utah": "https://content.sportslogos.net/logos/6/234/thumbs/23467492017.gif", "Washington": "https://content.sportslogos.net/logos/6/219/thumbs/21956712016.gif"}

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







