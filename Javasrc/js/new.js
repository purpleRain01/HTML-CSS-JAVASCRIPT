function f1()
   {
     var emailid=document.getElementById("t1").value;
    console.log("email...."+emailid);
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(emailid.match(mailformat))
        {
        alert("email is correct");
        }
    else
        {
        document.getElementById("s1").innerHTML="email not in correct format";
        }


    var pas=document.getElementById("t2").value;

    var passw= /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

        if(pas.match(passw))
            {
                alert("password is correct");
            }
        else
            {
                document.getElementById("s2").innerHTML= "password not in correct format";
            }
                var repas=document.getElementById("t3").value;
      






        var fname=document.getElementById("t4").value;    
        var lname=document.getElementById("t5").value;
        if(fname==" " || lname=="")
        {    document.getElementById("s5").innerHTML= "enter firstname and lastname";
        }
        else{
            alert("fnmae and lname are coreect");
        }
// const dt=new Date().getFullYear();

 

// const dt1=new Date((document.getElementById("t6").value)).getFullYear();
// if((dt-dt1)>=18)
// {

// }   
}
function f2()
{
    location.reload();
}