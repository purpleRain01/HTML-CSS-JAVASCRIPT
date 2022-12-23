
function ValidateForm()
{
    let selitm=checkDDl();
    if(selitm==0)
    {
        document.getElementById('dropdown').innerHTML="Please select this field.";
    }
    else
    {
       
        let k=checkForm();
        switch(k)
        {
                case 1:
                    document.getElementById('pfname').innerHTML="Please enter your name";
                    document.getElementById('plname').innerHTML="";
                    document.getElementById('paddr').innerHTML="";
                    document.getElementById('page').innerHTML="";
                    document.getElementById('phgt').innerHTML="";
                    document.getElementById('pwgt').innerHTML="";
                    break;
                case 2:
                    document.getElementById('plname').innerHTML="Please enter the last name";
                    document.getElementById('pfname').innerHTML="";
                    document.getElementById('paddr').innerHTML="";
                    document.getElementById('page').innerHTML="";
                    document.getElementById('phgt').innerHTML="";
                    document.getElementById('pwgt').innerHTML="";
                    break;
                case 3:
                    document.getElementById('paddr').innerHTML="Please enter your address";
                    document.getElementById('pfname').innerHTML="";
                    document.getElementById('plname').innerHTML="";
                    document.getElementById('page').innerHTML="";
                    document.getElementById('phgt').innerHTML="";
                    document.getElementById('pwgt').innerHTML="";
                    break;
                case 4:
                    document.getElementById('page').innerHTML="Please enter your age";
                    document.getElementById('pfname').innerHTML="";
                    document.getElementById('plname').innerHTML="";
                    document.getElementById('paddr').innerHTML="";
                    document.getElementById('phgt').innerHTML="";
                    document.getElementById('pwgt').innerHTML="";
                    break;
                case 5:
                    document.getElementById('phgt').innerHTML="Please enter your hight";
                    document.getElementById('pfname').innerHTML="";
                    document.getElementById('plname').innerHTML="";
                    document.getElementById('paddr').innerHTML="";
                    document.getElementById('page').innerHTML="";
                    document.getElementById('pwgt').innerHTML="";
                    break;
                case 6:
                    document.getElementById('pwgt').innerHTML="Please enter your weight";
                    document.getElementById('pfname').innerHTML="";
                    document.getElementById('plname').innerHTML="";
                    document.getElementById('paddr').innerHTML="";
                    document.getElementById('page').innerHTML="";
                    document.getElementById('phgt').innerHTML="";
                    break;
                case 10:
                    document.getElementById('pfname').innerHTML="Please enter your name";
                    document.getElementById('plname').innerHTML="Please enter the last name";
                    document.getElementById('paddr').innerHTML="Please enter your address";
                    document.getElementById('page').innerHTML="Please enter your age";
                    document.getElementById('phgt').innerHTML="Please enter your hight";
                    document.getElementById('pwgt').innerHTML="Please enter your weight";
                    break;

                default:
                    document.getElementById('pfname').innerHTML="";
                    document.getElementById('plname').innerHTML="";
                    document.getElementById('paddr').innerHTML="";
                    document.getElementById('page').innerHTML="";
                    document.getElementById('phgt').innerHTML="";
                    document.getElementById('pwgt').innerHTML="";
                    CalcBMI();
        }
    }
}


    function CalcBMI()
    {
        var h=document.getElementById('hgt').value;
        var w=document.getElementById('wgt').value;
        

        h=(h/100)*(h/100);
        var bmi=(w/h).toFixed(1);
        document.getElementById('bmi').value=bmi;
        if(document.getElementById('m').checked || checkDDl()==1)
        {
            switch(true)
            {
                case bmi<20.7:
                    document.getElementById('descr').value="under";
                    break;
                case bmi>20.7 && bmi<26.4:
                        document.getElementById('descr').value="ideal";
                        break;
                case bmi>26.4 && bmi<27.8:
                        document.getElementById('descr').value="marginal";
                        break;
                case bmi>27.8 && bmi<31.1:
                        document.getElementById('descr').value="over";
                        break;
                case bmi>31.1 && bmi<45.4:
                        document.getElementById('descr').value="very over";
                        break;
                case bmi>=45.4:
                        document.getElementById('descr').value="extreme";
                        break;
                default:
                    break;

            }       
        }
        else if(document.getElementById('f').checked || checkDDl()==2 || checkDDl()==3)
        {
            switch(true)
            {
                case bmi<19.1:
                    document.getElementById('descr').value="under";
                    break;
                case bmi>19.1 && bmi<25.8:
                        document.getElementById('descr').value="ideal";
                        break;
                case bmi>25.8 && bmi<27.3:
                        document.getElementById('descr').value="marginal";
                        break;
                case bmi>27.3 && bmi<32.3:
                        document.getElementById('descr').value="over";
                        break;
                case bmi>32.3 && bmi<44.8:
                        document.getElementById('descr').value="very over";
                        break;
                case bmi>=44.8:
                        document.getElementById('descr').value="extreme";
                        break;
                default:
                    break;
            }
        }
    }
    function Gender()
        {
            let selitm=checkDDl();
                if(selitm)
                    {
                        if(selitm>=4)
                            {document.getElementById('hide1').style.display="inline-flex";} 
                        else
                            {document.getElementById('hide1').style.display="none";}
                    }                                                                                      
        }   
   
    function checkDDl()
        {
            var ddl=document.getElementById('ddl');
            var selitm=ddl.options[ddl.selectedIndex].value;
            document.getElementById('dropdown').innerHTML="";// for making the validation tex=""
            return selitm;
        }
    
    function checkForm()
            {
                var flag=0;
                if(document.getElementById('fname').value=="" && document.getElementById('lname').value=="" && document.getElementById('addr').value=="" && document.getElementById('age').value=="" && document.getElementById('hgt').value=="" && document.getElementById('wgt').value=="")
                {
                    return 10;
                }

                else
                {
                    if(document.getElementById('fname').value=="")
                        flag=1;
                    if(document.getElementById('lname').value=="")
                        flag=2;
                    if(document.getElementById('addr').value=="")
                        flag=3;    
                    if(document.getElementById('age').value=="")
                        flag=4;
                    if(document.getElementById('hgt').value=="")
                        flag=5;
                    if(document.getElementById('wgt').value=="")
                        flag=6;
                }
                

                return flag;
            }