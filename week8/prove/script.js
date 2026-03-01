const enemy ={
    name: "Fire Dino",
    class: "Tank",
    level: 1,
    health: 100,
    image: "stardewdino.jpg",
    attacked: function(){
        this.health -= 20;

        if (this.health <= 0){
            this.health = 0;
            alert(`${this.name} has died`)
        }

        renderEnemy();
    },
    levelUp: function(){
        this.level++;
        this.health+=20;
        renderEnemy();
    }
}

const attack = document.querySelector("#attack");
const level = document.querySelector("#level");

attack.addEventListener("click",function(){
    enemy.attacked();
})
level.addEventListener("click",function(){
    enemy.levelUp();
})

function renderEnemy(){
    document.querySelector(".image").src = enemy.image;
    document.querySelector(".image").alt = `${enemy.name} Character Portrait`;
    document.querySelector(".name").textContent = enemy.name;
    document.querySelector(".stats").innerHTML =
    `
    <p>Class: ${enemy.class}</p>
    <p>Level: ${enemy.level}</p>
    <p>Health: ${enemy.health}</p>
    `;
}

renderEnemy();