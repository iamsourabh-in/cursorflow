
var alpha = 0; // Orientation around Z axis
var beta = 0; // Orientation around X axis
var gamma = 0; // Orientation around Y axis

function setup() {
	createCanvas(710, 400);
	if (window.DeviceOrientationEvent) {
		window.addEventListener('deviceorientation', onOrientationChange);
	}
}

function draw() {
	background(255, 255, 255);
	angleMode(DEGREES);
	rectMode(CENTER);
	push();
	translate((width / 2) - 50, height / 2);
	rotate(alpha);
	//rotateX(-beta);
	rect(0, 0, 50, 100);
	pop();
}

function onOrientationChange(e) {
	alpha = e.alpha;
	beta = e.beta;
	gamma = e.gamma;

	console.log(alpha + " " + beta + " " + gamma);
}
