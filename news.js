function o(data){
//alert("test");
document.write(data);
}
function cr(){
o("<br>");
}
function mydate(){
	var d=new Date();
	var ma=d.getMonth();
	var da=d.getDate();
	var ya=d.getFullYear();  
	weekday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	//var month=[]; //var month=new Array();
	month=["January","February","March","April","May","June","July","August","September","October","November","December"];
	var mm = month[d.getMonth()];
	var nn = weekday[d.getDay()];
	ttime=d.getTime();
	this.day_name=nn;
	this.month_name=mm;
	this.month=ma;
	this.date=da;
	this.year=ya;
	this.times=ttime;
	this.datez=ya+"/"+ma+"/"+da;
	this.datey=nn+","+mm+" "+da;
	this.time = d.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
	return this;
}
function news(cont){
news2=new mydate;
op = document.getElementById(cont);
op.innerHTML=(news2.time+":"+"hi<br>")+op.innerHTML;
}
function clockb(cid,option){
clockz=new mydate;
this.txt=(clockz.datey);
this.num=(clockz.datez+":"+clockz.time);
otc = document.getElementById(cid);
if (option==1) otc.innerHTML=this.txt;
if (option==2) otc.innerHTML=this.num;
return this;
}
function makediv(nam){
//require <body>
			var divTag = document.createElement("div");  
            divTag.id = nam;  
            document.body.appendChild(divTag); 
			this.div=nam;
			return this
}
function notify(nid,msg,tim){
 tim = (typeof tim == 'undefined')?4000:tim;
 note = document.getElementById(nid);
 h=new mydate();
 msg=h.datey+"<br>"+msg;
 note.innerHTML=msg;
 note.style.display = '';
 note.style.cursor= 'pointer';
 close = document.getElementById(nid);
 close.addEventListener('click', function() {
 note = document.getElementById(nid);
 note.style.display = 'none';
 }, false);
 setTimeout(function(){note.style.display = 'none';},tim);
}
function loadDoc2() {
	

      document.getElementById("scr1").innerHTML = "xhttp.responseText;";
var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("scr1").innerHTML = xhttp.responseText;
    }
  }


var params = "data="+"";
xhttp.open("POST", "https://t.kunok.com/goto.php?url=https://t.kunok.com/welcome.txt", true);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//xhttp.setRequestHeader("Content-length", params.length);
//xhttp.setRequestHeader("Connection", "close");

xhttp.send(params);
 // xhttp.send("O=Henry&lname=Ford");
//xhttp.send();
// var a=new Date();   
		//var d = new Date(year, month, day, hours, minutes, seconds, milliseconds);
        //document.getElementById("disp").innerHTML=a.getFullYear()+"/"+(a.getMonth()+1)+"/"+a.getDate()+" "+a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds() ;
		i++;
   
//setTimeout(loadDoc2,15000);
 //document.getElementById("xx").innerHTML=i;
//clk();
}