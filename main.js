nose_x=0;
nose_y=0;

function preload(){
   clownNose = loadImage("https://i.postimg.cc/SKXsXYSs/clown-nose-clipart-2.png");
}
function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);
    /*fill("red");
    stroke(255,0,0);
    circle(nose_x, nose_y, 20);*/
    image(clownNose, nose_x-15, nose_y-15, 30, 30);
}

function take_snapshot(){
    save('MyFilterPhoto.png');
}

function modelLoaded(){
    console.log("modelLoaded!");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log('nose x:'+results[0].pose.nose.x);
        console.log('nose y:'+results[0].pose.nose.y);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
    }
}