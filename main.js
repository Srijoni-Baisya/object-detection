img = "";

function preload(){
    img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}

function draw(){
    //place image
    image(img,0,0,640,420);

    fill("#00008b");
    text("Dog",70,75);

    noFill(); //unset the color set in fill()
    stroke("#00008b");
    rect(60,60,400,350);
}