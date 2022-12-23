
function Leftclick(){
    
   
    if(!flag){document.getElementById("car").style.marginLeft="750px";}

    var pos=parseInt(document.getElementById("car").style.marginLeft);
    pos=pos-10;
    document.getElementById("car").style.marginLeft=""+pos+"px";

    flag=true;
    
}
function Rightclick(){
    if(!flag){document.getElementById("car").style.marginLeft="750px";}

    var pos=parseInt(document.getElementById("car").style.marginLeft);
   
    pos=pos+10;
    document.getElementById("car").style.marginLeft=""+pos+"px";
    
    flag=true;
}
function reset(){
    location.reload();
}
window.onload=f1();
function f1(){
    flag=false;
}