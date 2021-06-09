const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const text = document.getElementById("text");
const score = document.getElementById("score");
const bestscore = document.getElementById("bestscore");
newscore = 0
highscore = 0



function jump() {
    if (dino.classList != "jump"){
        dino.classList.add("jump");

        setTimeout(function (){
            dino.classList.remove("jump");
        }, 400);
    }

    if (cactus.classList != "cactusmove"){
        cactus.classList.add("cactusmove");
        text.classList.add("hide");
        newscore = 0
    }
}

let isAlive = setInterval(function (){
    
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft <42 && cactusLeft >0 && dinoTop >= 140)
    {
        cactus.classList.remove("cactusmove"); 
        text.innerHTML = ("You died... [Space]");
        text.classList.remove("hide");
        if (highscore < newscore){
            highscore = newscore
            bestscore.innerHTML = parseInt(highscore)
        }
    }

    if (text.classList == "hide") {
        newscore = newscore + 0.2;
        score.innerHTML = parseInt(newscore)
    }

    if (cactusLeft <-10 && dinoTop < 140){
        
    if (cactus.classList == "cactusmove"){

        obs = parseInt(getRandomArbitrary(0,3));
        if (obs == 0){
            cactus.style.backgroundImage = "url('assets/trash.png')";
            cactus.style.width = "32px";
            cactus.style.height = "32px";
            cactus.style.top = "136px";
        }
        if (obs == 1){
            cactus.style.backgroundImage = "url('assets/car.png')";
            cactus.style.width = "64px";
            cactus.style.height = "32px";
            cactus.style.top = "136px";
        }
        if (obs == 2){
            cactus.style.backgroundImage = "url('assets/man.png')";
            cactus.style.width = "32px";
            cactus.style.height = "48px";
            cactus.style.top = "120px";
        }
    }
    }


    
}, 10)


document.addEventListener("keydown", function (event){
    jump();
});

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }