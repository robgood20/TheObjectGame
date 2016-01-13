var health = 100;
function slap(){
    health = health-1;
   
}

var update = document.getElementById('playerhealth');
function updateHealth(){
    update.innerText = health.toString()
    
}
updateHealth()