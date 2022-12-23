window.onload=f1();

function show(){
    let s="";
    for(var i=1;i<=10;i++)
    {
        for(var j=1;j<=9;j++)
        {
          let temp=(i*j).toString();
          s+=temp+"               ";
        }
        s=s+"<br><br>";
    }
    document.getElementById("lbl").innerHTML=s;
   
}