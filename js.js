window.onload = onLoad;

function onLoad(){
	loop();
}

function loop(){
	var d = new Date();
	document.getElementById("currentTime").innerHTML = "Current Time: " + d;
	requestAnimationFrame(loop);
}