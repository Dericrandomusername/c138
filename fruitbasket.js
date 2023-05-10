function setup(){
    canvas=createCanvas(640,420)
    canvas.center()
    objectDetector=ml5.objectDetector("cocossd",modelLoaded)
    document.getElementById("status").innerHTML="status:detecting objects"
}
status="";
objects=[];
function modelLoaded(){
    console.log("model Loaded");
    status="true";
    objectDetector.detect(img,gotResults)
}
function gotResults(error,results){
    if(error){
        console.log(error);

    }
    console.log(results);
    objects=results
}
function preload(){
    img=loadImage("frtuit.jpg");
}
function draw(){
    image(img,0,0,640,420);
   if(status!=""){
    for(var i=0;i<objects.length;i++){
        document.getElementById("status").innerHTML="status: Object detected";
        fill("white");
         percent=floor(objects[i].confidence*100);
         text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
         noFill ();
         stroke("white");
         rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
   }
   }