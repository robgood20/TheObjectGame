var player={
    playerHealth : 100,
    playerName : "Player 1",
    playerHits : 0,
}

function slap(){
    player.playerHealth = player.playerHealth-1;
    player.playerHits = player.playerHits+1;
    updateAll();
}

function punch(){
    player.playerHealth = player.playerHealth-5;
    player.playerHits = player.playerHits+1;
    updateAll();
}

function kick(){
    player.playerHealth = player.playerHealth-10;
    player.playerHits = player.playerHits+1;
    updateAll();
}

function updateAll(){    
    var update = document.getElementById('playerHealth');
        update.innerText = player.playerHealth.toString();
        var displayHits = document.getElementById('playerHits');
        displayHits.innerText = player.playerHits.toString();
        var displayName = document.getElementById('playerName');
        displayName.innerText = player.playerName.toString();
    if (player.playerHealth <= 0){
         document.getElementById("player-panel").classList.add("panel-danger")
    }else{
         document.getElementById("player-panel").classList.remove("panel-danger")
    }
}
updateAll();