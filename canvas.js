console.log("hello david");

var svg = document.getElementById("svg1");

var setup = function setup() {
    
};

var start = function start(){
	ctx.clearRect(0,0,500,500);
	if (left && pacX >= 10){
		pacX -= 2;
	}
	else if (right && pacX =< 490){
		pacX += 2;
	}
	else if (down && pacY =< 490){
		pacY += 2;

	}
	else if (up && pacY >= 10){
		pacY -= 2;
	}
	ctx.moveTo(x,y);
	ctx.beginPath();
	ctx.arc(x, y, 10, 0, Math.PI*2);
	ctx.stroke();
	ctx.fill();
};

var Pac = class Pac {
    constructor(x, y) {
	this.x = x;
	this.y = y;
	left = false;
	down = false;
	up = false;
	right = false;
    };

    document.onkeydown = checkKey;
    checkKey(e) {
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
    
    move() {
	if (x <= 10 || x >= 490) {
	    left = false;
	    right = false;
	}
	if (y <= 10 || y >= 490) {
	    up = false;
	    down = false;
	}
	if (left) {
	    x -= 2;
	}
	else if (down) {
	    y += 2;
	}
	else if (up) {
	    y -= 2;
	}
	else {
	    x += 2;
	}
    };
    
    ifTouched() {
	return "";
    };
};

var Ghost = class Ghost {
    constructor(x, y) {
	this.x = x;
	this.y = y;
	this.directionX = 1;
	this.directionY = 1;
    };

    move() {
	if (x <= 10 || x >= 490) {
	    directionX *= -1;
	}
	if (y <= 10 || y >= 490) {
	    directionY *= -1;
	}
	this.x += directionX;
	this.y += directionY;
    };
    
    ifTouched() {
	return "";
    };
};

myInterval = setInterval(start, 20);
