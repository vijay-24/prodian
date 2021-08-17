

function get_data(){
	// console.log(document.getElementById("nam").value);
	console.log($('#nam').val());

   var nam=$('#nam').val();
   var skill=$('#skill').val();
   var state=$('#state').val();
   
	// var nam=document.getElementById("nam").value;
	// var skill=document.getElementById("skill").value;
	// var state=document.getElementById("state").value;
	 // alert(nam+skill+state);
	// var div = document.getElementById("div_show");  

         // if (div.style.display != "none") 
         // {  
         //    div.style.display = "none";  
         // }  
         if((nam!="" && skill!="") && state!="")
         {  
            
           var emp_det = {
            na1:nam, 
            sk1:skill, 
            st1:state
         };
            // document.getElementById("p_nam").innerHTML   ="Name 	  :  "+nam;
            // document.getElementById("p_skill").innerHTML ="Skills     : "+skill;
            // document.getElementById("p_state").innerHTML ="State : "+state;
            // fun_jq();

         }  
         // alert("--");
         // const obj = JSON.parse('{na1:nam,sk1:skill,st1:state}');
         console.log(emp_det);
         // console.log(obj);
         window.location.href="New_Emp.html";
}