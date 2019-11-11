window.onload = onLoad;

function onLoad(){
	document.getElementById("currentTime").innerHTML = "loop()";
	loop();
}

function loop(){
	var d = new Date();
	document.getElementById("currentTime").innerHTML = "Current Time: " + d;
	requestAnimationFrame(loop);
}