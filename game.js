var health = 100;
function slap(){
    health = health-1;
    updateHealth()
}

var update = document.getElementById('playerhealth');
function updateHealth(){
    update.innerText = health.toString()
    
}
updateHealth()