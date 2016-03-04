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

var x = 10;
var y = 10;

var start = function start(){
	ctx.clearRect(0,0,500,500);
	if (left && x > 10){
		x -= 2;
	}
	else if (right && x < 490){
		x += 2;
	}
	else if (down && y < 490){
		y += 2;

	}
	else if (up && y > 10){
		y -= 2;
	}
	ctx.moveTo(x,y);
	ctx.beginPath();
	ctx.arc(x, y, 10, 0, Math.PI*2);
	ctx.stroke();
	ctx.fill();
};

document.onkeydown = checkKey;

function checkKey(e) {
	console.log(e.keyCode);
    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        left = false;
	down = false;
	up = true;
	right = false;
    }
    else if (e.keyCode == '40') {
        // down arrow
        left = false;
	down = true;
	up = false;
	right = false;
    }
    else if (e.keyCode == '37') {
       // left arrow
	left = true;
	down = false;
	up = false;
	right = false;
    }
    else if (e.keyCode == '39') {
       // right arrow
        left = false;
	down = false;
	up = false;
	right = true;
    }

};



myInterval = setInterval(start, 20);
