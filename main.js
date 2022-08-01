var featureX = 0
var featureY = 0

function preload() {
    feature = loadImage("mustache.png");

}

function setup() {
    canvas = createCanvas(400, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function draw() {
    image(video, 0, 0, 400, 300);
    image(feature, featureX, featureY, 30, 30);
}    

function take_snapshot() {
    save('My_filter_img');
}

function gotPoses(results) {
    if(results.length > 0) {
        featureX = results[0].pose.nose.x + 40;
        featureY = results[0].pose.nose.y;
    }
}

function modelLoaded() {
    console.log("poseNet is initialized")
}
