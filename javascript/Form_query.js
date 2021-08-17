

function get_data(){
	// console.log(document.getElementById("nam").value);
	// console.log($('#nam').val());
  // alert("god");
   var name=$('#tb_name').val();
   var lname=$('#tb_lname').val();
   var fname=$('#tb_fname').val();
    var date=$('#date').val();
   var email=$('#tb_email').val();
   var gender=$('input[name="rd_gender"]:checked').val();
    var phone=$('#tb_ph').val();
   var skill=1;
   // var state=$('#e_state').val();
   //  var nam=$('#e_name').val();
   // var skill=$('#e_skill').val();
   // var state=$('#e_state').val();
   
   console.log(date);
    console.log(email);
     console.log(gender);
      console.log(phone);
       console.log(skill);

       if(skill==1)
        console.log("some");


	// var nam=document.getElementById("nam").value;
	// var skill=document.getElementById("skill").value;
	// var state=document.getElementById("state").value;
	 // alert(nam+skill+state);
	// var div = document.getElementById("div_show");  
  
        
         // if((nam!="" && skill!="") && state!="")
         // {  
            
         //     var emp_det = {
         //      na1:nam, 
         //      sk1:skill, 
         //      st1:state
         //   };
         
         // }  
         // $htmlstring="</td><td> Kumar </td><td> Machine Learning </td><td> Active</td></tr>";
         // $htmlstring="<tr><td> "+nam+" </td><td> "+skill+" </td><td>"+state+"</td></tr>";

         //  $("#tbody").append($htmlstring);

         // document.getElementById("tbody").value="<tr><td> 2.</td><td> Kumar </td><td> Machine Learning </td><td> Active</td></tr>";
      
         // window.location.href="New_Emp.html";
}