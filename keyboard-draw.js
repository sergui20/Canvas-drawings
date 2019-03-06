var keys = {UP: 38, DOWN: 40, LEFT: 37 , RIGHT:39};
var canvas = document.getElementById("canvas");
var paper = canvas.getContext("2d");

var x = 150;
var y = 150;
var color1 = "blue";
var mov = 5;

document.addEventListener("keyup", drawWithKeys);
document.addEventListener("keydown", drawWithKeys2);


drawLine("blue", 149, 149, 151, 151, paper);

function drawLine(color2, xi, yi, xf, yf, panel){
	panel.beginPath();
	panel.strokeStyle = color2;
	panel.moveTo(xi,yi);
	panel.lineTo(xf, yf);
	panel.stroke();
	panel.closePath();
}

function drawWithKeys(ev){
	switch(ev.keyCode){

		case keys.UP:
			drawLine(color1, x, y, x, y - mov, paper);
			y = y - mov;
			console.log("up");
		break;
		case keys.DOWN:
			drawLine(color1, x, y, x, y + mov, paper);
			y = y + mov;
			console.log("down");
		break;
		case keys.LEFT:
			drawLine(color1, x, y, x - mov, y, paper);
			x = x - mov;
			console.log("left");
		break;
		case keys.RIGHT:
			drawLine(color1, x, y, x + mov, y, paper);
			x = x + mov;
			console.log("right");
		break;
	}	
}

function drawWithKeys2(ev2){
	var mov2 = 5;

	if (ev2.keyCode = keys){
		mov = 0;
	}
	
	switch(ev2.keyCode){

		case keys.UP:
			drawLine(color1, x, y, x, y - mov2, paper);
			y = y - mov2;
		break;
		case keys.DOWN:
			drawLine(color1, x, y, x, y + mov2, paper);
			y = y + mov2;
		break;
		case keys.LEFT:
			drawLine(color1, x, y, x - mov2, y, paper);
			x = x - mov2;
		break;
		case keys.RIGHT:
			drawLine(color1, x, y, x + mov2, y, paper);
			x = x + mov2;
		break;
	}
}