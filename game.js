var playerHealth = 100;
var playerName = "Player 1";
var playerHits = 0;

var update = document.getElementById('playerHealth');
function updateHealth(){
    update.innerText = health.toString()    
}

var displayHits = document.getElementById('playerHits');
function updateHits(){
    displayHits.innerText = hits.toString()    
}

var displayName = document.getElementById('playerName');
function updateName(){
    displayName.innerText = playerName.toString()    
}


function slap(){
    playerHealth = playerHealth-1;
    playerHits = playerHits+1;
    updateHealth()
}

function punch(){
    playerHealth = playerHealth-5;
    playerHits = playerHits+1;
    updateHealth()
}

function kick(){
    playerHealth = playerHealth-10;
    playerHits = playerHits+1;
    updateHealth() 
}
    
updateName()
updateHits()
updateHealth()