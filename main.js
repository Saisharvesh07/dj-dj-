song = "";
rightWristX = 0;
rightWristY = 0;
leftWristX = 0;
leftWristY = 0;
scoreRightWrist = 0;
scoreLeftWrist = 0;

function preload()
{
song = loadSound("music.mp3");
}

function setup() {
canvas = createCanvas(600, 500);
canvas.center();

video = createCanvas(VIDEO);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
if(results.length > 0)
{
 console.log(results);
 scoreRightWrist = results[0].pose.keypoints[10].score;
 scoreLeftWrist = results[0].pose.keypoints[9].score;
 console.log("scoreRightWrist = " + scoreRightWrist +"scoreLeftWrist = "+ scoreLeftWrist);

 leftWristX = results[0].pose.leftWrist.x;
 leftWrist = results[0].pose.leftWrist.y;
 console.log("leftWristX = " + leftWristX +"leftWristY  = "+ leftWristY);

 rightWristX = results[0].pose.rightWrist.x;
 rightWrist = results[0].pose.rightWrist.y;
 console.log("rightWristX = " + rightWristX +"rightWristY  = "+ rightWristY);

}
}
function modelLoaded() {
console.log('PoseNet Is Initialized')
}

function draw() {
image(video, 0, 0, 600, 500);
}

function play()
{
song.play();
song.setvolume(1);
song.rate(1);
}