nosex="";
nosey="";
function preload(){

}

function setup(){
    canvas= createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(500,500);
    video.hide();
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose', getposes);
}

function modelloaded(){
    console.log("posenet is initialized")
}

function draw(){
    image(video,0,0,500,500);
}

function getposes(results){
    if(results.length>0){

    console.log(results);
    nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;
    console.log(nosex);
    console.log(nosey);
}
}