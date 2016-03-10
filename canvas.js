console.log("hello david");
var startbutton = document.getElementById("start");
startbutton.addEventListener("click", setup);

var Pac1;

var svg = document.getElementById("svg1");

var setup = function setup() {
    Pac1 = new pac(20, 20);
};

function pac(x, y) {
    this.x = x;
    this.y = y;
    this.left = false;
    this.down = false;
    this.up = false;
    this.right = false;
    this.imgPac =document.createElementNS("http://www.w3.org/2000/svg", "circle");
    this.imgPac.setAttribute("r", 10);
    
    this.draw = function () {
	this.move();
	this.imgPac.setAttribute("cx", x);
	this.imgPac.setAttribute("cy", y);
	console.log("draw");
    };
    
    this.move = function () {
	document.onkeydown = checkKey;
	function checkKey(e) {
	    console.log(e.keyCode);
	    e = e || window.event;
	    
	    if (e.keyCode == '38') {
		// up arrow
		this.left = false;
		this.down = false;
		this.up = true;
		this.right = false;
	    }
	    else if (e.keyCode == '40') {
		// down arrow
		this.left = false;
		this.down = true;
		this.up = false;
		this.right = false;
		console.log(this.down);
	    }
	    else if (e.keyCode == '37') {
		// left arrow
		this.left = true;
		this.down = false;
		this.up = false;
		this.right = false;
	    }
	    else if (e.keyCode == '39') {
		// right arrow
		this.left = false;
		this.down = false;
		this.up = false;
		this.right = true;
	    }
	};
	
	if (this.x < 10 || this.x > 490) {
	    this.left = false;
	    this.right = false;
	}
	if (this.y < 10 || this.y > 490) {
	    this.up = false;
	    this.down = false;
	}
	if (this.left) {
	    this.x -= 2;
	}
	else if (this.down) {
	    this.y += 2;
	    console.log("DOWN");
	}
	else if (this.up) {
	    this.y -= 2;
	}
	else if (this.right){
	    this.x += 2;
	}
    };
};

var go = function go() {
    Pac1.draw();
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
setup();
myInterval = setInterval(go, 20);
