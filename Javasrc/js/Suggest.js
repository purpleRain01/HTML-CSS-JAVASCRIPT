
const pop=["Alph","Alfah","Bravo","BRAH voh","Charlie","CHAR lee","David","Dog","Edward","Edward","Frank",	"Freddy","Golf","George","Hotel","Harry","India","Indigo","Juliet","John","Kilo","King","Lincoln","Love","Mary","Mother","Nora","John","Nuts","Ocean","Orange","Paul","Peter","pig","Queen","quee","quotes","rabbit","ruby","risk","sad","solar","thomas","turn","umbrella","unicorn","violet","very","women","wonder","winter","xmas","xyz","yatch","yack","zeebra","zero"];

let str="";
let flag=0;  

function suggessions()
    { str="";
    var ch=document.getElementById('searchbox').value;
    
       
        for(let k=0;k<pop.length;k++)
        {
            var temp=pop[k]; 
           
            for(let j=0;j<ch.length;j++)
            {
                // alert(ch[j]+temp[j]);
                if(temp[j].toUpperCase()==ch[j].toUpperCase())
                {
                   flag++;
                }
            }
            if(flag==ch.length)
            {
                // alert(str);
                str=str+pop[k]+"<br>";
            }flag=0;

        }   
          
   
    document.getElementById('showsimilar').innerHTML=str;
     
        
    }