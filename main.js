var noseX = 0
var noseY = 0

function preload() {

}

function setup() {
    canvas = createCanvas(400, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
}

function draw() {
    image(video, 0, 0, 400, 300);

}    

function take_snapshot() {
    save('My_filter_img');
}