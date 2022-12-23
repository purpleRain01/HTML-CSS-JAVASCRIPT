function validate()
    {
        debugger;
        var flag=0;
        var Regexemail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var eml=document.getElementById('email').value;
        if(!(eml.match(Regexemail)))
        {
           
            flag=1;
        }
        
        var Regexpwd = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if(!(document.getElementById('password').value).match(Regexpwd))
        {
            flag=2; 
        }

        if(document.getElementById('password').value!=document.getElementById('cpassword').value)
        {
            flag=3;
        }
        if(document.getElementById('fname').value=="" || document.getElementById('lname').value=="" || document.getElementById('dob').value=="")
        {
            flag=4; 
        }
      let year=new Date().getFullYear()-(new Date(document.getElementById('dob').value).getFullYear());
  
      
      

        if(flag==0)
        {
           if(year>=18)
           {
            document.getElementById('success').innerHTML="Success";

           }
           else
           {
            document.getElementById('success').innerHTML="age is below 18";
           }
        }
        else
        {
            switch(flag)
            {
                case 1:
                    alert("Email id is not valid");
                    break;
                case 2:
                    alert("Please enter a valid password");
                    break;
                case 3:
                    alert("password mismatch");
                    break;
                case 4:
                    alert("first name,lastname and dob is required field");
                    break;
                default:
                     alert("default");
            }   
                        
            

        } 
    }

    function Reset(){
        location.reload();
    }