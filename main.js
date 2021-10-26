img = "";

//var to check the status of object detection
status = "";

//var to hold all the results
objects = [];

function preload(){
    img = loadImage("Laptop.jpg");
}

function setup(){
    canvas = createCanvas(700,500);
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
    image(img,0,0,700,500);

    if(status != ""){
        for(i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status : Object Detected";

            fill("#00008b");

            //store the confidence and convert it to percentage
            percent = floor(objects[i].confidence * 100);

            //display the label
            textSize(18);
            text(objects[i].label + " (" + percent + "%) ", objects[i].x + 15 , objects[i].y + 15);


            //unset the color
            noFill();

            //set the border color
            stroke("#00008b");

            //draw the rectangle around the object
            rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
        }
    }

    //fill("#00008b");
    //text("Dog",70,75);
    //noFill(); //unset the color set in fill()
    //stroke("#00008b");
    //rect(60,60,400,350);
    //text color
    //fill("#FF0000");
    //place label
    //text("Cat",350,95);
    //unset color
    //noFill();
    //set the border color of the rectangle
    //stroke("#00008b");
    //draw the rectangle around the cat
    //rect(300,80,280,320);
}

//define gotResult() function
function gotResult(error, results){
    if (error){
        console.log(error);
    }
    else{
        console.log(results);
        //update the objects variable
        objects = results;
    }
}
