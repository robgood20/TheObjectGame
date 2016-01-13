var health = 100;
var playername = "Player 1";
var hits = 0;

var update = document.getElementById('playerHealth');
function updateHealth(){
    update.innerText = health.toString()    
}

var update = document.getElementById('playerHits');
function updateHits(){
    update.innerText = hits.toString()    
}

var update = document.getElementById('playerName');
function updateName(){
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