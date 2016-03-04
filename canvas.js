var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//ctx.fillStyle = "#000ff";
//ctx.fillRect(50,50,100,200);
//ctx.beginPath();
//ctx.arc(200,300,50,0,Math.PI*2);
//ctx.fill();

//ignore part 2
//ctx.beginPath();
//ctx.moveTo(250,250);
//ctx.quadraticCurveTo(250,250,400,250);
//ctx.quadraticCurveTo(250, 250, 200, 300);
//ctx.closePath();
//ctx.stroke();
//ctx.fill();

var left = false;
var down = true;
var up = false;
var right = false;

var x = 0;
var y = 0;

var start = function start(){
	ctx.clearRect(0,0,500,500);
	if (left && x > 0){
		x -= 1;
		ctx.moveTo(x,y);
		ctx.beginPath();
		ctx.arc(x, y, 5, 0, Math.PI*2);
		ctx.stroke();
		ctx.fill();
	}
	if (right && x < 500){
		x += 1;
		ctx.moveTo(x,y);
		ctx.beginPath();
		ctx.arc(x, y, 5, 0, Math.PI*2);
		ctx.stroke();
		ctx.fill();
	}
	if (down && y < 500){
		y += 1;
		ctx.moveTo(x,y);
		ctx.beginPath();
		ctx.arc(x, y, 5, 0, Math.PI*2);
		ctx.stroke();
		ctx.fill();
	}
	if (up && x > 0){
		y -= 1;
		ctx.moveTo(x,y);
		ctx.beginPath();
		ctx.arc(x, y, 5, 0, Math.PI*2);
		ctx.stroke();
		ctx.fill();
	}
};

document.onkeydown = checkKey;

function checkKey(e) {
	console.log(e.keyCode);
    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        var left = false;
	var down = false;
	var up = true;
	var right = false;
    }
    else if (e.keyCode == '40') {
        // down arrow
        var left = false;
	var down = true;
	var up = false;
	var right = false;
    }
    else if (e.keyCode == '37') {
       // left arrow
	var left = true;
	var down = false;
	var up = false;
	var right = false;
    }
    else if (e.keyCode == '39') {
       // right arrow
        var left = false;
	var down = false;
	var up = false;
	var right = true;
    }

};



myInterval = setInterval(start, 20);
