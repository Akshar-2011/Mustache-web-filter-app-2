noseX = 0;
noseY = 0;
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("Model loaded");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-15;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}
function preload(){
    mustache = loadImage("https://image.shutterstock.com/image-vector/transparent-mustache-icon-png-vector-260nw-1952976943.jpg");
}
function draw(){
    image(video, 0, 0, 300, 300);
}