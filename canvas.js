var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var mysvg = document.getElementById("mysvg");

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
var spacedown = false;

var x = 10;
var y = 10;

ctx.rect(10, 10, 480, 480);
ctx.fillStyle = 'black';
ctx.fill();
ctx.lineWidth = 20;
ctx.strokeStyle = 'blue';
ctx.stroke();

var start = function start(){
	//ctx.clearRect(0,0,500,500);
	
	if (left && x > 10){
		x -= 10;
	}
	else if (right && x < 490){
		x += 10;
	}
	else if (down && y < 490){
		y += 10;

	}
	else if (up && y > 10){
		y -= 10;
	}
	if (spacedown){
	ctx.lineTo(x,y);
	ctx.stroke();
	}
	//ctx.moveTo(x,y);
	//ctx.beginPath();
	//ctx.moveTo(x,y);
	//ctx.strokeStyle = 'blue';
	//ctx.fillStyle = 'blue';
	//ctx.lineWidth = 1;
	//ctx.beginPath();
	//ctx.arc(x, y, 1, 0, Math.PI*2);
	//ctx.stroke();
	//ctx.fill();
	mysvg.style.left = x-10 + "px";
	mysvg.style.top = y-10 + "px";
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
	else if (e.keyCode == '32') {
       // space bar
    if(spacedown){
		ctx.closePath();
		ctx.stroke();
		ctx.fillStyle = 'blue';
		ctx.fill();
	}else{
		console.log("start");
		ctx.beginPath();
		ctx.moveTo(x,y);
	}
	spacedown = !spacedown
    }

};



myInterval = setInterval(start, 40);
