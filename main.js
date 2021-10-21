img = "";

//var to check the status of object detection
status = "";

function preload(){
    img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();

    //load the model
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);

    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

//define modelLoaded() function
function modelLoaded(){
    console.log("Model Loaded !");
    //update the status 
    status = true;
    //execute the model
    objectDetector.detect(img , gotResult);
}

function draw(){
    //place image
    image(img,0,0,640,420);

    fill("#00008b");
    text("Dog",70,75);

    noFill(); //unset the color set in fill()
    stroke("#00008b");
    rect(60,60,400,350);

    //text color
    fill("#FF0000");

    //place label
    text("Cat",350,95);

    //unset color
    noFill();

    //set the border color of the rectangle
    stroke("#00008b");

    //draw the rectangle around the cat
    rect(300,80,280,320);
}

//define gotResult() function
function gotResult(error, results){
    if (error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}