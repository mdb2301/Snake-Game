var s;
var sz = 20;
var food; var speed = 10; var score = 0; var paused = false;

function setup() { 
    createCanvas(600, 600);
    noStroke();
    frameRate(speed);
    picklocation();
    s = new Snake;
}

function picklocation(){
    var col = floor(width/sz);
    var row = floor(height/sz);
    food = createVector(floor(random(col)),floor(random(row)));
    food.mult(sz);
}

function draw() {
    background(0);
    s.update();
    s.show();

    if(s.eatFood(food)){
        picklocation();
        speed++;
        score+=10;
        document.getElementById('score').innerHTML = score.toString();
    }

    fill(0,255,0);
    rect(food.x,food.y,sz,sz);
}

function keyPressed(){
    if(keyCode === UP_ARROW)
    {
        s.dir(0,-1);
    }else if(keyCode === DOWN_ARROW){
        s.dir(0,1);
    }else if(keyCode === RIGHT_ARROW){
        s.dir(1,0);
    }else if(keyCode === LEFT_ARROW){
        s.dir(-1,0);
    }else if(keyCode === 32){
        if(paused){
            noLoop();
            paused = false;
        }else{
            loop();
            paused = true;
        }
    }
}

