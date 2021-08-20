
var app=angular.module("myapp",[]);
app.directive("mytitle", function() {  
    return {  
        template : "Employee Form "  
    };  
}); 

app.controller('myctrl', function($scope) {  
    $scope.title1 = "Employee Registration ";  
    $scope.title2 = "Form";  
    
    $scope.count = 0;

    $scope.An_firname="This is empty..!! ";
    $scope.An_laname="";
    $scope.An_faname="";
    $scope.An_date=new Date();
    $scope.An_phone;
    $scope.An_email="";
    $scope.An_gender="";
    $scope.An_skills=""
    $scope.An_img="";

    $scope.myctrl_1=function(){
      $scope.count++;
      console.log("myctrl_1 working");
    }

    $scope.save_1=function(){
    //    $scope.firname= $scope.firname ;
    // $scope.laname= " hussy ";
    // $scope.faname= "joe";
    console.log($scope.ch_java.Selected);
        if($scope.ch_java.selected){
            $scope.An_skills="Java ";
            console.log("1");
        }
        if($scope.ch_html){
            $scope.An_skills+="Html ";
            console.log("1");
        }
        if($scope.ch_python){
            $scope.An_skill+="Python ";
            console.log("1");
        }

        $scope.An_firname=$scope.firname;
        $scope.An_laname=$scope.laname;
        $scope.An_faname=$scope.faname;
        $scope.An_date=$scope.dob.getDate();
        $scope.An_phone=$scope.phone;
        $scope.An_email=$scope.email;
        $scope.An_gender=$scope.gender;
        $scope.An_skills=$scope.skill;
        $scope.An_img= $scope.photo;


        console.log($scope.An_firname);
        console.log($scope.An_laname);
        console.log($scope.An_faname);
        console.log($scope.An_date);
        console.log($scope.An_phone);
        console.log($scope.An_email);
        console.log($scope.An_gender);
        console.log($scope.An_skills);     
        console.log($scope.An_img);     
        console.log("save working");
    }

    $scope.show_1=function(){
        $scope.p_name=$scope.An_firname;
        $scope.p_lname=$scope.An_laname;
        $scope.p_fname=$scope.An_faname;
        $scope.p_dob=$scope.An_date;
        $scope.p_ph=$scope.An_phone;
        $scope.p_email=$scope.An_email;
        $scope.p_gender=$scope.An_gender;
        $scope.p_skill=$scope.An_skills;
        
    }



});  







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