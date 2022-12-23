function convertToAscii()
    {
          
        try{
            
        let str=document.getElementById('txtascii').value;
        let ch=str[str.length-1];
        document.getElementById('lblascii').innerHTML=ch.charCodeAt(0);
        }
        catch(e)
        {
            alert(e.message);
        }
     
    }

