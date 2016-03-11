var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var pacman = document.getElementById("pacman");
var ghost = document.getElementById("ghost");

var pacleft = false;
var pacdown = true;
var pacup = false;
var pacright = false;

var spacedown = false;

var ghostdown = true;
var ghostright = true;

var ghostx = 200;
var ghosty = 250;

var pacx = 10;
var pacy = 10;

var pixel;

ctx.rect(10, 10, 480, 480);
ctx.fillStyle = 'black';
ctx.fill();
ctx.lineWidth = 20;
ctx.strokeStyle = 'blue';
ctx.stroke();

var start = function start(){
	//ctx.clearRect(0,0,500,500);
	if (pacleft && pacx > 10){
		pacx -= 20;
	}
	else if (pacright && pacx < 490){
		pacx += 20;
	}
	else if (pacdown && pacy < 490){
		pacy += 20;

	}
	else if (pacup && pacy > 10){
		pacy -= 20;
	}
	if (spacedown){
	ctx.lineTo(pacx,pacy);
	ctx.stroke();
	}

	pacman.style.left = pacx-10 + "px";
	pacman.style.top = pacy-10 + "px";
	
	if (ctx.getImageData(ghostx, ghosty-10, 1, 1).data[2] == 255){ //top hitbox
		ghosty += 5;
		if(ghostright){
			ghostx += 5;
		}
		else{
			ghostx -= 5;
		}
		ghostdown = true;
		ghost.style.left = ghostx-10 + "px";
		ghost.style.top = ghosty-10 + "px";
	}
	else if (ctx.getImageData(ghostx-10, ghosty, 1, 1).data[2] == 255){ //left hitbox
		ghostx += 5;
		if(ghostdown){
			ghosty += 5;
		}
		else{
			ghosty -= 5;
		}
		ghostright = true;
		ghost.style.left = ghostx-10 + "px";
		ghost.style.top = ghosty-10 + "px";
	}
	else if (ctx.getImageData(ghostx+10, ghosty, 1, 1).data[2] == 255){ //right hitbox
		ghostx -= 5;
		if(ghostdown){
			ghosty += 5;
		}
		else{
			ghosty -= 5;
		}
		ghostright = false;
		ghost.style.left = ghostx-10 + "px";
		ghost.style.top = ghosty-10 + "px";
	}
	else if (ctx.getImageData(ghostx, ghosty+10, 1, 1).data[2] == 255){ //bottom hitbox
		ghosty -= 5;
		if(ghostright){
			ghostx += 5;
		}
		else{
			ghostx -= 5;
		}
		ghostdown = false;
		ghost.style.left = ghostx-10 + "px";
		ghost.style.top = ghosty-10 + "px";
	}
	else{
	if(ghostdown){
		ghosty += 5;
	}
	else{
		ghosty -= 5;
	}
	if(ghostright){
		ghostx += 5;
	}
	else{
		ghostx -= 5;
	}
	ghost.style.left = ghostx-10 + "px";
	ghost.style.top = ghosty-10 + "px";
	}
	//var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
	//console.log(p);
};

document.onkeydown = checkKey;

function checkKey(e) {
	console.log(e.keyCode);
    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        pacleft = false;
		pacdown = false;
		pacup = true;
		pacright = false;
    }
    else if (e.keyCode == '40') {
        // down arrow
        pacleft = false;
		pacdown = true;
		pacup = false;
		pacright = false;
    }
    else if (e.keyCode == '37') {
       // left arrow
		pacleft = true;
		pacdown = false;
		pacup = false;
		pacright = false;
    }
    else if (e.keyCode == '39') {
       // right arrow
        pacleft = false;
		pacdown = false;
		pacup = false;
		pacright = true;
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
		ctx.moveTo(pacx,pacy);
	}
	spacedown = !spacedown
    }

};

myInterval = setInterval(start, 80);
