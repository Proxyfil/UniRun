const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const text = document.getElementById("text");
const score = document.getElementById("score");
const bestscore = document.getElementById("bestscore");
const skin = document.getElementById("skin");
newscore = 0;
highscore = 0;


function jump() {
    if (dino.classList != "jump"){
        dino.classList.add("jump");

        setTimeout(function (){
            dino.classList.remove("jump");
        }, 400);
    }

    if (cactus.classList != "cactusmovetier1" && cactus.classList != "cactusmovetier2" && cactus.classList != "cactusmovetier3"){
        cactus.classList.add("cactusmovetier1");
        text.classList.add("hide");
        newscore = 0;
    }
}

let isAlive = setInterval(function (){
    
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    let cactusTop = parseInt(window.getComputedStyle(cactus).getPropertyValue("top"));

    if (cactusLeft <42 && cactusLeft >0 && dinoTop >= cactusTop)
    {
        cactus.classList.remove("cactusmovetier1"); 
        cactus.classList.remove("cactusmovetier2"); 
        cactus.classList.remove("cactusmovetier3"); 
        text.innerHTML = ("You died... [Space]");
        text.classList.remove("hide");
        if (highscore < newscore){
            highscore = newscore;
            bestscore.innerHTML = parseInt(highscore);
        }
    }

    if (text.classList == "hide") {
        newscore = newscore + 0.2;
        score.innerHTML = parseInt(newscore);
    }

    if (cactusLeft <-10 && dinoTop < cactusTop){
        
        if (cactus.classList == "cactusmovetier1" || cactus.classList == "cactusmovetier2" || cactus.classList == "cactusmovetier3"){

            obs = parseInt(getRandomArbitrary(0,3));
            if (obs == 0){
                cactus.style.backgroundImage = "url('assets/trash.png')";
                cactus.style.width = "32px";
                cactus.style.height = "32px";
                cactus.style.top = "-23px";
            }
            if (obs == 1){
                cactus.style.backgroundImage = "url('assets/car.png')";
                cactus.style.width = "64px";
                cactus.style.height = "32px";
                cactus.style.top = "-23px";
            }
            if (obs == 2){
                cactus.style.backgroundImage = "url('assets/man.png')";
                cactus.style.width = "32px";
                cactus.style.height = "48px";
                cactus.style.top = "-39px";
            }
            if (cactus.classList != "cactusmovetier2" && newscore > 1000){
                speedup();
            }
            if (cactus.classList != "cactusmovetier3" && newscore > 2000){
                speedup();
            }
        }
    }
    
}, 10);

function speedup(){
    if (cactus.classList != "cactusmovetier2" && newscore > 1000){
        cactus.classList.remove("cactusmovetier1");
        text.innerHTML = "Speed Tier 2 !";
        text.classList.remove("hide");
    
        setTimeout(function(){
            text.classList.add("hide");
            cactus.classList.add("cactusmovetier2");
        }, 1000);
    }
    
    if (cactus.classList != "cactusmovetier3" && newscore > 2000){
        cactus.classList.remove("cactusmovetier2");
        text.innerHTML = "Speed Tier 3 !";
        text.classList.remove("hide");

        setTimeout(function(){
            text.classList.add("hide");
            cactus.classList.add("cactusmovetier3");
        }, 1000);
    }
}


document.addEventListener("keydown", function (event){
    if (event.key == ' ' || event.key == 'touchstart' ){
        jump();
    }
    if (skin.value == "merci" && cactus.classList != "cactusmovetier1" && cactus.classList != "cactusmovetier2" && cactus.classList != "cactusmovetier3"){
        dino.style.backgroundImage = "url(assets/character_skin.gif)";
    }
});

document.addEventListener("click", function (event){
    if (skin.value == "thais" && cactus.classList != "cactusmovetier1" && cactus.classList != "cactusmovetier2" && cactus.classList != "cactusmovetier3"){
        dino.style.backgroundImage = "url(assets/character_skin.gif)";
    }
    jump();
});


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
