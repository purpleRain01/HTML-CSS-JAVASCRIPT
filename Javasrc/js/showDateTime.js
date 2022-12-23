function displayDate() {
     const dt=new Date()
     let sDate=dt.toLocaleDateString();
     document.getElementById('txtdate').value=sDate.toString();

     let sTime=dt.toLocaleTimeString();
     document.getElementById('txttime').innerHTML=sTime.toString();
  
}

window.onload = displayDate;