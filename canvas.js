console.log("hello david");
var startbutton = document.getElementById("start");
startbutton.addEventListener("click", setup);

var svg = document.getElementById("svg1");

var setup = function setup() {
    Pac(10, 10);
    go();
    
};

var go = function go() {
    Pac.draw();
};

function Pac(x, y) {
    this.x = x;
    this.y = y;
    this.left = false;
    this.down = false;
    this.up = false;
    this.right = false;
    this.imgPac = document.createNewElementNS("http://www.w3.org/2000/svg", "circle");
    this.imgPac.setAttribute("r", 10);
};

Pac.draw = function draw() {
    Pac.move();
    this.imgPac.setAttribute("cx", x);
    this.imgPac.setAttribute("cy", y);
};
    
Pac.move = function move() {
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
    
    if (this.x <= 10 || this.x >= 490) {
	this.left = false;
	this.right = false;
    }
    if (this.y <= 10 || this.y >= 490) {
	this.up = false;
	this.down = false;
    }
    if (this.left) {
	this.x -= 2;
    }
    else if (this.down) {
	this.y += 2;
    }
    else if (this.up) {
	this.y -= 2;
    }
    else {
	this.x += 2;
    }
};

//var Ghost =  Ghost {
//   constructor(x, y) {
//	this.x = x;
//	this.y = y;
//	this.directionX = 1;
//	this.directionY = 1;
  //  };
//
  //  move() {
//	if (x <= 10 || x >= 490) {
//	    directionX *= -1;
//	}
//	if (y <= 10 || y >= 490) {
//	    directionY *= -1;
//	}
//	this.x += directionX;
//	this.y += directionY;
  //  };
    //
//    ifTouched() {
//	return "";
  //  };
//};

myInterval = setInterval(go, 20);
