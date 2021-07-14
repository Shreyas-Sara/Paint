canvas= document.getElementById("myCanvas");
ssd = canvas.getContext("2d");

 mouse_event="empty";

 canvas.addEventListener("mousedown",down);
 function down(e){
color=document.getElementById("color_in").value;
width=document.getElementById("width").value;
radius=document.getElementById("radius").value;
mouse_event="mousedown";
 }
 canvas.addEventListener("mousemove",move);
 function move(e){
current_x=e.clientX-canvas.offsetLeft;
current_y=e.clientY-canvas.offsetTop;
if(mouse_event=="mousedown"){
    ssd.beginPath();
    ssd.strokeStyle=color;
    ssd.lineWidth=width;
    ssd.arc(current_x,current_y,radius,0,360);
    ssd.stroke();
}
 }
 canvas.addEventListener("mouseleave",leave);
 function leave(e){
    mouse_event="mouseleave";
 }
 canvas.addEventListener("mouseup",up);
 function up(e){
mouse_event="mouseup";
 }
 function clear_area(){
     ssd.clearRect(0,0,ssd.canvas.width,ssd.canvas.height);
 }