var player={
    playerHealth : 100,
    playerName : "Player 1",
    playerHits : 0,
    items:[itemObject.shield, itemObject.armor, itemObject.helmet]
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

//var sheild = new modifier('Simba', 'M', 'Red')//

function Item(name, modifier, description){
    this.name = name;
    this.modifier = modifier;
    this.description = description;
    this.draw = function(){}
    
}

var itemObject = {
    shield:new Item("Shield",0.3,"This is an shield!"),
    armor:new Item("Armor",0.5,"This armor's made of peanut butter"),
    helmet:new Item("Helmet",1,"No more face shots!"),
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