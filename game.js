var playerHealth = 100;
var playerName = "Player 1";
var playerHits = 0;

var update = document.getElementById('playerHealth');
function updateHealth(){
    if("[PlayerHealth]" <= 0){
         document.getElementById("player-panel").classList.add("panel-danger")
    }else{
         document.getElementById("player-panel").classList.remove("panel-danger")
    }
    update.innerText = playerHealth.toString()    
}

var displayHits = document.getElementById('playerHits');
function updateHits(){
    displayHits.innerText = playerHits.toString()    
}

var displayName = document.getElementById('playerName');
function updateName(){
    displayName.innerText = playerName.toString()    
}


function slap(){
    playerHealth = playerHealth-1;
    playerHits = playerHits+1;
    updateHealth()
    updateHits()
}

function punch(){
    playerHealth = playerHealth-5;
    playerHits = playerHits+1;
    updateHealth()
    updateHits()
}

function kick(){
    playerHealth = playerHealth-10;
    playerHits = playerHits+1;
    updateHealth() 
    updateHits()
}
    
updateName()
updateHits()
updateHealth()