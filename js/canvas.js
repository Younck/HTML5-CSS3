/*function draw(id){
	var canvas=document.getElementById(id);
	var context=canvas.getContext("2d");
	context.fillStyle="green";
	context.strokeStyle="white";
	context.lineWidth=10;
	context.fillRect(0,0,500,350);
	context.strokeRect(50,50,180,120);
	context.strokeRect(110,110,180,120);
}
function draw(id){
	var canvas=document.getElementById(id);
	var context=canvas.getContext("2d");
	context.fillStyle="#f1f2f3";
	context.fillRect(0,0,400,400);
	for (var i=0;i<10;i++) {
		context.beginPath();
		context.arc(i*25,i*25,i*10,0,Math.PI*2,true);
		context.closePath();
		context.fillStyle="rgba(255,0,0,0.25)";
		context.fill();
	}
}*/
function draw(id){
	var canvas=document.getElementById(id);
	var context=canvas.getContext("2d");
	context.fillStyle="green";
	context.fillRect(0,0,800,300);
	context.fillStyle="#fff";
	context.strokeStyle="#fff";
	context.font="bold 40px 微软雅黑"
	context.fillText('麦子学院',50,50);
	context.strokeText("麦子学院",50,100);
}
	
	
