
//     function btnDisable(){
//         document.getElementById("submit").disabled = true;
//         // document.getElementById("nav_bar").disabled = true;
//     }

//    function email_check(){
//         try{
//             mail = document.getElementById("tb_email").value;
         
      
//         if(mail.match("@")!=null && mail.length>=3)
//         {
            
//             mail = mail.split("@");
//             if((mail[0][0]!=null && mail[1][0]!=null))
//             {
//              document.getElementById("tb_email").style.borderColor  = "green";
//              document.getElementById("div_email").style.display = "none";
//              console.log("working");
//             }
//             else
//             {
//              document.getElementById("tb_email").style.borderColor  = "Red";
//              document.getElementById("div_email").style.display = "block";
//              console.log("not working");
//              document.getElementById("submit").disabled = true;
//             }
//         }
//         else{
//             console.log("Not");
//             document.getElementById("tb_email").style.borderColor  = "Red";
//             document.getElementById("div_email").style.display = "block";
//             console.log("not working");
//             document.getElementById("submit").disabled = true;
//         }
       
//     }
//     catch(err) {
//         console.log("catch Block"+ err);
//     }

//    } 

// function pass_check(){
//     try{
//         pass=document.getElementById("tb_pass").value;
       
//         var up=0,lw=0,nu=0,sp=0;
//         for(i=0;i<pass.length;i++){
//             temp=pass.charCodeAt(i);
//             if(temp>=48 && temp<=57)
//             {
//                 nu=1;
//             }
//             else if(temp>=97 && temp<=122)
//             {
//                 lw=1;
//             }
//             else if(temp>=65 && temp<=90)
//             {
//                 up=1;
//             }
//             else
//             {
//                 sp=1;
//             }
           
//         }
        
//        if((up==1 && lw==1) && ((nu==1 && sp==1) && pass.length>=8))
//        {
//         document.getElementById("tb_pass").style.borderColor  = "green";
//         document.getElementById("div_pass").style.display = "none";
//         document.getElementById("submit").disabled = false;
//        }
//        else
//        {
//         document.getElementById("tb_pass").style.borderColor  = "Red";
//         document.getElementById("div_pass").style.display = "block";
//         document.getElementById("submit").disabled = true;
//        }
//     }
//     catch(error){
//     }
// }



