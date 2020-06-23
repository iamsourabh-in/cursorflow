
var alpha = 1; // Orientation around Z axis
var beta = 50; // Orientation around X axis
var gamma = 0; // Orientation around Y axis

function setup() {
	createCanvas(710, 400);
	if (window.DeviceOrientationEvent) {
		window.addEventListener('deviceorientation', onOrientationChange);
		window.addEventListener("devicemotion", handleMotion, true);
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
	rect(0, 0, beta, beta + 1);
	pop();
}

function onOrientationChange(e) {


	if (e.alpha < alpha - 1 || e.alpha > alpha + 1) {
		alpha = e.alpha;
		console.log('now');
		socket.emit('orientation', alpha)
	}
	beta = e.beta;
	gamma = e.gamma;

	//console.log(alpha + " " + beta + " " + gamma);
}

function handleMotion() {
	beta = event.acceleration.x
	console.log('alpha' + alpha + " beta: " + beta + " " + gamma);
}
jQuery(document).ready(function () {
	socket.on('change-o', function (_alpha) {
		console.log('received :' + _alpha)
		alpha = _alpha;
	});
});


screen.orientation.addEventListener("change", function (e) {
	alert(screen.orientation.type + " " + screen.orientation.angle);
}, false);
