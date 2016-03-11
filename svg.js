var canvas = document.getElementById("canvas");
var i;
var countdown = 6;
var xPos = [];
var yPos = [];
var rad = [];
var direction = 0;
var score = 0;
var banner = document.getElementById("banner");
var rank = document.getElementById("rank");
var start = document.getElementById("c");
var mainChar;

var setup = function setup(e) {
    clearInterval(i);
    countdown = 6;
    score = 0;
    xPos = [];
    yPos = [];
    rad = [];
    while(canvas.childElementCount != 0){
	canvas.removeChild(canvas.children[0]);
    };
    i = setInterval(background1,1000);
};

var background1 = function background1(e) {
    while(canvas.childElementCount != 0){
	canvas.removeChild(canvas.children[0]);
    };
    var endtube = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    endtube.setAttribute("cx", 400);
    endtube.setAttribute("cy", 400);
    endtube.setAttribute("r", 400);
    endtube.setAttribute("fill", "white");
    endtube.setAttribute("stroke", "black");
    canvas.appendChild(endtube);
    var statube = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    statube.setAttribute("cx", 400);
    statube.setAttribute("cy", 400);
    statube.setAttribute("r", 10);
    statube.setAttribute("fill", "white");
    statube.setAttribute("stroke", "black");
    canvas.appendChild(statube);
    banner.textContent = countdown - 1;
    countdown--;
    console.log(countdown);
    if(countdown < 1){
	clearInterval(i);
	console.log("hi");
	i = setInterval(update,20);
    };
    mainChar = new Image('./mainChar.png', 395, 700, 10, 10); //the coordinate is the top left corner
    canvas.appendChild(mainChar.getSVG());
};

var update = function update(e){
    background2();
    drawObs();
    spawnCircle();
    drawCharacter();
    score++;
};

var background2 = function background2(e){
    xPos = [];
    yPos = [];
    rad = [];
    while(canvas.childElementCount != 0){
	xPos.push(canvas.children[0].getAttribute("cx"));
	yPos.push(canvas.children[0].getAttribute("cy"));
	rad.push(canvas.children[0].getAttribute("r"));
	canvas.removeChild(canvas.children[0]);
    };
    var endtube = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    endtube.setAttribute("cx", 400);
    endtube.setAttribute("cy", 400);
    endtube.setAttribute("r", 400);
    endtube.setAttribute("fill", "white");
    endtube.setAttribute("stroke", "black");
    canvas.appendChild(endtube);
    var statube = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    statube.setAttribute("cx", 400);
    statube.setAttribute("cy", 400);
    statube.setAttribute("r", 10);
    statube.setAttribute("fill", "white");
    statube.setAttribute("stroke", "black");
    canvas.appendChild(statube);
    banner.textContent = "Score: " + score;
};

var drawObs = function drawObs(e) {
    var fcount = 0;
    for (fcount = xPos.length - 1; fcount >= 0; fcount--) {
	var xobs = xPos[fcount] - 400;
	var yobs = yPos[fcount] - 400;
	var test = Math.sqrt(Math.pow(xobs,2) + Math.pow(yobs,2));
	var mod = 1;
	if (xobs != null && yobs != null && test >= 9 && test < 360){
	    var robs = rad[fcount];
	    var obs = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	    var theta = Math.atan(yobs / xobs) + direction;
	    if(yobs < 0){
		theta += Math.PI;
	    }
	    if((yobs > 0 && xobs < 0) || (yobs < 0 && xobs > 0)){
		mod = -1;
	    }
	    var d = test + 4;
	    var xcalc = (d * Math.cos(theta) * mod) + 400;
	    var ycalc = (d * Math.sin(theta) * mod) + 400;
	    var rcalc = robs * 1.036;
	    obs.setAttribute("cx", xcalc);
	    obs.setAttribute("cy", ycalc);
	    obs.setAttribute("r", rcalc);
	    obs.setAttribute("fill", "red");
	    obs.setAttribute("stroke", "black");
	    canvas.appendChild(obs);
	    if(Math.sqrt(Math.pow(xcalc - 400,2) + Math.pow(ycalc - 705,2)) < rcalc){
		clearInterval(i);
		gameOver();
	    }
	}
    }
};

var spawnCircle = function spawnCirlce(e) {
    var obs = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    var theta = Math.random() * Math.PI * 2;
    //var theta = 1 * Math.PI / 3;
    console.log(theta);
    var xcalc = (Math.cos(theta) * 10) + 400;
    var ycalc = (Math.sin(theta) * 10) + 400;
    console.log(xcalc);
    console.log(ycalc);
    var rcalc = 1;
    obs.setAttribute("cx", xcalc);
    obs.setAttribute("cy", ycalc);
    obs.setAttribute("r", rcalc);
    obs.setAttribute("fill", "red");
    obs.setAttribute("stroke", "black");
    canvas.appendChild(obs);
};


var drawCharacter = function drawCharacter(e) {
    mainChar = new Image('./mainChar.png', 395, 700, 10, 10);
    canvas.appendChild(mainChar.getSVG());
};

document.onkeydown = checkKey;
document.onkeyup = other;
function checkKey(e) {
    console.log(e.keyCode);
    e = e || window.event;
    if (e.keyCode == '37') {
	direction = -1 * Math.PI / 180;
    }
    else if (e.keyCode == '39') {
        direction = Math.PI / 180;
    }
};
var gameOver = function gameOver(e) {
    banner.textContent = "Game Over. Your score was: " + score;
    rank.textContent = "Your previous score was: " + score;
};

function other(e) {
    direction = 0;
};

start.addEventListener("click",setup);
