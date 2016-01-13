var health = 100;
function slap(){
    health = health-1;
    updateHealth()
}

var update = document.getElementById('playerhealth');
function updateHealth(){
    update.innerText = health.toString()
    
}

function punch(){
    health = health-5;
    updateHealth()
}

function kick(){
    health = health-10;
    updateHealth()
}
    

updateHealth()