var canvasContainer = document.getElementById("canvas-container");
var canvas = document.getElementById("canvas_mouse");
var paper = canvas.getContext("2d");

var state = 0;
var color = 'blue';
var xi, yi;

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', drawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseover', drawing);

drawLine('black',0,0,700,0);
drawLine('black',700,0,700,400);
drawLine('black',700,400,0,400);
drawLine('black',0,400,0,0);

function startDrawing(ev) {
	state = 1;

	xi = ev.offsetX;
	yi = ev.offsetY;

	console.log(xi,yi)
}

function drawing(ev){
	if(state == 1){
		drawLine('blue', xi, yi, ev.layerX, ev.layerY);
	}

	xi = ev.offsetX;
	yi = ev.offsetY;
}

function stopDrawing(ev) {
	state = 0;

	xi = ev.offsetX;
	yi = ev.offsetY;
}

function drawLine(color, xi, yi, xf, yf) {
	paper.beginPath();
	paper.strokeStyle = color;
	paper.moveTo(xi,yi);
	paper.lineTo(xf,yf);
	paper.stroke();
	paper.closePath();
}