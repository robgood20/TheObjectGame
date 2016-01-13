var health = 100;
var playername = "Player 1";
var playerhits = 0;

var update = document.getElementById('playerhealth');
function updateHealth(){
    update.innerText = health.toString()    
}


function slap(){
    health = health-1;
    hits = hits+1;
    updateHealth()
}

function punch(){
    health = health-5;
    hits = hits+1;
    updateHealth()
}

function kick(){
    health = health-10;
    hits = hits+1;
    updateHealth() 
}
    
updateName()
updateHits()
updateHealth()