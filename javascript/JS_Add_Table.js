

function get_data(){
	// console.log(document.getElementById("nam").value);
	// console.log($('#nam').val());
  // alert("god");
   var nam=$('#e_name').val();
   var skill=$('#e_skill').val();
   var state=$('#e_state').val();
   
	// var nam=document.getElementById("nam").value;
	// var skill=document.getElementById("skill").value;
	// var state=document.getElementById("state").value;
	 // alert(nam+skill+state);
	// var div = document.getElementById("div_show");  
  
        
         if((nam!="" && skill!="") && state!="")
         {  
            
             var emp_det = {
              na1:nam, 
              sk1:skill, 
              st1:state
           };
         
         }  
         // $htmlstring="</td><td> Kumar </td><td> Machine Learning </td><td> Active</td></tr>";
         $htmlstring="<tr onclick="+"myFunction(this)"+"><td> "+nam+" </td><td> "+skill+" </td><td>"+state+"</td></tr>";

          $("#tbody").append($htmlstring);

         document.getElementById("tbody").value="<tr><td> 2.</td><td> Kumar </td><td> Machine Learning </td><td> Active</td></tr>";
      
         // window.location.href="New_Emp.html";
}

function add_auto() {
   var emp_det =  [
        {
            "na": "sam",
            "sk1": "Machine Learning",
            "st1": "Active",
        },
        {
            "na": "John",
            "sk1": "Artificial intiligent",
            "st1": "Active",
         },
        {
            "na": "Ajai",
            "sk1": "Data Science",
            "st1": "Active",
         }
    ];

    $htmlstring="";
    for(let i=0;i<emp_det.length;i++)
    {
        $htmlstring ="<tr onclick="+"myFunction(this)"+"><td> "+emp_det[i].na+" </td><td> "+emp_det[i].sk1+" </td><td>"+emp_det[i].st1+"</td></tr>";
        $("#tbody").append($htmlstring);
    }
   
}