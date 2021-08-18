

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
   var skill="";
   // var state=$('#e_state').val();
   //  var nam=$('#e_name').val();
   // var skill=$('#e_skill').val();
   // var state=$('#e_state').val();
   
    console.log(date);
    console.log(email);
    console.log(gender);
    console.log(phone);
    console.log(skill);


      var selectedLanguage = new Array();
        $('input[name="ch_skill"]:checked').each(function() {
        selectedLanguage.push(this.value);
        });
        console.log(selectedLanguage);
        for(var i=0;i<selectedLanguage.length;i++)
        {
            console.log(selectedLanguage[i]);
            skill=skill+" "+selectedLanguage[i];
        }
   
        console.log(skill);

        document.getElementById("p_name").innerHTML="First Name :" +name;
        document.getElementById("p_lname").innerHTML="Lase Name: "+lname;
        document.getElementById("p_fname").innerHTML="Father Name :"+fname;
        document.getElementById("p_dob").innerHTML="Date Of Birth :"+date;
        document.getElementById("p_email").innerHTML="Email :"+email;
        document.getElementById("p_ph").innerHTML="Phone No. :"+phone;
        document.getElementById("p_gender").innerHTML="Gender :"+gender;
        document.getElementById("p_skill").innerHTML="Skills :"+skill;



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