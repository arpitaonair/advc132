img = "";
status = "";

function preload(){ 
    img = loadImage("dog_cat.jpg");
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    objectdetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("h3").innerHTML = "Detecting objects"
}


function modelLoaded(){
    console.log("modelloaded")
    status = true;
    objectdetector.detect(img, gotresult)
}
function gotresult(error, result){
    if(error){
        console.log(error);
    }
    console.log(result);
}
function draw(){
    image(img, 0, 0, 600, 500);

    fill("blue");
    text("Dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350 );
    
    fill("purple");
    text("cat", 175, 250);
    noFill();
    stroke("orange");
    rect(120, 200, 50, 80 );
}