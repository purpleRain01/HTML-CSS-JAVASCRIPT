function ShowColor()
    {
        let r=parseInt(document.getElementById("txtRed").value);
        let g=parseInt(document.getElementById("txtGreen").value);
        let b=parseInt(document.getElementById("txtBlue").value);

        if(r>=0 && r<=255 && g>=0 && g<=255 && b>=0 && b<=255)
            {
                let hexColor=r.toString(16)+g.toString(16)+b.toString(16);
                // document.getElementById("colorpool").style.backgroundColor="#"+ hexColor.toString();

                document.getElementById("colorpool").style.backgroundColor="rgb("+r+","+g+","+b+")";

                document.getElementById("colorcode").innerHTML=hexColor.toString();
               
            }  
        else
            {
                alert("Please Enter valid Color code eg:122,122,122");
            }

    }   