function saveStorage(id){
	var data=document.getElementById(id).value;
	var time=new Date().getTime();
	localStorage.setItem(time,data);
	alert("数据被保存！");
	loadStorage("msg");
}
function clearStorage(id){
	localStorage.clear();
	alert("数据清除成功")
}
function loadStorage(id){
	var reselt='<table border="1">';
	for (var i=0;i<localStorage.length;i++) {
		var key=localStorage.key(i);
		var value=localStorage.getItem(key);
		var date=new Date();
		date.setTime(key);
		var datestr=date.toGMTString();
		reselt+='<tr><td>'+'这是第'+i+'条数据</td><td>'+value+'</td><td>'+datestr+'</td></tr>'
	}
	reselt+='</table>';
	var target=document.getElementById(id);
	target.innerHTML=reselt;
}
