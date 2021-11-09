import React,{ useState } from 'react';
// import { Table } from "semantic-ui-react";
// import contacts from '../page/data.json';
import { MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';
import { Action } from 'history';
import { MDBInput } from 'mdb-react-ui-kit';






class employee extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      form: {
        firstName: props.firstName,
        lastName: props.lastName,
        email: props.mail,
        mobile: props.phone,
        dob:props.dob
      }
    }


    this.state2 = {
      people: [
        { "id" :1 ,"firstName": "John", "lastName": "Doe", "dob": "12/12/2010" ,"email":"john@gmail.com","mobile":"9788331203"},
        { "id" :2 ,"firstName": "Michael", "lastName": "Smith", "dob": "12/12/2010","email":"michael@gmail.com" ,"mobile":"9788331203"},
        { "id" :3 ,"firstName": "Carol", "lastName": "Jordan", "dob": "12/12/2010","email":"michael@gmail.com","mobile":"9788331203" },
        { "id" :4 , "firstName": "Tanya", "lastName": "Blake", "dob": "12/12/2010","email": "tanya@gmail.com","mobile":"9788331203"}
    ]
    };
    
  }
  

  contacts=[
    { "id" :1 ,"firstName": "John", "lastName": "Doe", "dob": "12/12/2010" ,"email":"john@gmail.com","mobile":"9788331203"},
    { "id" :2 ,"firstName": "Michael", "lastName": "Smith", "dob": "12/12/2010","email":"michael@gmail.com" ,"mobile":"9788331203"},
    { "id" :3 ,"firstName": "Carol", "lastName": "Jordan", "dob": "12/12/2010","email":"michael@gmail.com","mobile":"9788331203" },
    { "id" :4 , "firstName": "Tanya", "lastName": "Blake", "dob": "12/12/2010","email": "tanya@gmail.com","mobile":"9788331203"}

]




    


n=4;

  changeFirstName(event) {
    var form        = this.state.form;
    
    form.firstName  = event.target.value;
   
    this.setState({ form: form });
    // console.log(form.firstName);
  }
  changeLastName(event) {
    var form        = this.state.form;
    form.lastName  = event.target.value;

    this.setState({ form: form });
  }
  changeMail(event) {
    var form        = this.state.form;
    form.email  = event.target.value;

    this.setState({ form: form });
    
  }
  changephone(event) {
    var form        = this.state.form;
    form.mobile  = event.target.value;

    this.setState({ form: form });
  }
  changeDob(event) {
    var form        = this.state.form;
    form.dob  = event.target.value;

    this.setState({ form: form });
  }
  formSubmitted() {

    // alert("good : "+this.state.form.firstName+" "+this.state.form.lastName+" "+this.state.form.mail+" "+this.state.form.phone+" "+this.state.form.dob);
      console.log(this.state.form);
      console.log(this.state.form.firstName);
      console.log(this.state.form.lastName);
      console.log(this.state.form.email);
      console.log(this.state.form.mobile);
      console.log(this.state.form.dob);
     

    this.contacts.push(this.state.form);
    console.log(this.contacts[this.n]);
    this.state2.people.push(this.state.form);
    console.log("----");
    console.log(this.state2.people);
    this.contacts = this.contacts;
    this.n++;
    for (let i = 0; i < this.contacts.length; i++) {
      console.log(this.contacts[i]);
    }  
    
  }

  getPeople() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then(response => response.json())
    //   .then(response => this.setState({ people: response }))
    //   .catch(error => console.log(error));

      this.setState({ people: this.state2.people })
  }
  

  reset(){
      console.log("Reset");
      
      // this.state.form.firstName="";
      // this.state.form.lastName="";
      // this.state.form.dob="";
      // this.state.form.email="";
      // this.state.form.mobile="";
      // document.getElementById("firstname").val="";
      // console.log("firstname : "+document.getElementById("firstname").val );
  }





    demo(){
        console.log("good");
    
        for (let i = 0; i < this.contacts.length; i++) {
            console.log(this.contacts[i]);
            console.log(this.contacts[i].firstName);
          }
          // contacts.push(this.state);
          var form        = this.state.form;
          console.log(form.firstName);
    }

    tableOnLoad(){
      console.log("OnLoad");
    }

    

        
    render(){

      return (<>
      <br></br>
     
      <h1 class="border border-primary blue rounded-5 text-center">Employee Details Form</h1><br></br>
      {/* Model called from model.js */}
       
               {/* Model */}
          {/* Button trigger modal  */}
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          ADD
        </button>
        <button onClick={this.demo}>Demo</button>
            <div class="container alert border-primary rounded-5">
                <table mdbTable datatable class="row-border hover w-100" onLoad={this.tableOnLoad}>
                    <thead >
                        <tr class="blue border-primary rounded-5">
                        <th>ID</th>   
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Date Of Birth</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                <tbody>
         
            {this.contacts.map(el => {
            return (
              <tr>
               <td>{el.id+1}</td>
               <td>{el.firstName} </td>
               <td>{el.lastName}</td>
               <td>{el.dob}</td>
               <td>{el.email}</td>
               <td>{el.mobile}</td>
               <td>
                   <button class= "btn btn-danger ml-2"> Delete</button>
                    <button type="button" class="btn btn-primary px-2 ml-2">Update</button>
               </td>
              </tr>
             
            );
          })}
          </tbody>
          </table>
        </div>

        {/* Trial */}

        <table>
          <thead>
            <tr>
              <th>LP</th>
              <th>USER</th>
              <th>EMAIL</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state2.people.map((person, index) => {
              return (
                <tr key={person.email}>
                  <th>{index + 1}</th>
                  <td>{person.firstName}</td>
                  <td>{person.lastName}</td>
                  <td>{person.email}</td>
                  <td>{person.mobile}</td>
                  <td>{person.dob}</td>

                  {/* <td>
                    <button onClick={this.deletePerson(this.state2.people.email)}>
                      Delete
                    </button>
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* --------------------Model------------------------ */}
       

        {/* <!-- Modal --> */}
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              {/* <form>
                <div class="container border border-primary px-2 py-2 rounded-5 w-100">
                    <div class="col-sm-12 px-2 py-2 alert alert-success">
                            <p class="text-center">
                            Enter Employee Details
                            </p>
                    </div>
                
                    
                    <div class="row px-2">
                        <div class="md-form mt-0 form-outline" >
                        
                        <MDBInput label='First Name' id='form1' type='text'pattern="[a-zA-Z ]{2,}$" 
                        value={this.state.form.firstName} onChange={this.changeFirstName.bind(this)}/> 
                    </div>
                    </div>
                
                    <div class="row px-2">
                        <div class="md-form mt-0 form-outline" >
                    
                        <MDBInput label='Last Name' id='form1' type='text'pattern="[a-zA-Z ]{2,}$" 
                        value={this.state.form.lastName} onChange={this.changeLastName.bind(this)}/> 
                    </div>
                    </div>
                
                    <div class="row px-2">
                        <div class="md-form mt-0 form-outline" >
                        <MDBInput label='Email Id' id='form1' type='text' pattern="[a-z0-9._%+-]+@[a-z0-9.-]{2,}$" 
                        value={this.state.form.email} onChange={this.changeMail.bind(this)}/> 
                    </div>
                    </div>
                
                        <div class="row px-2">
                            <div class="md-form mt-0 form-outline" >
                            <MDBInput label='Mobile Number' id='form1' type='number' 
                            value={this.state.form.mobile} onChange={this.changephone.bind(this)} /> 
                        </div>
                    </div>
                    
                        <div class="row px-2">
                        <div class="md-form mt-0 form-outline" >
                        <MDBInput label='DOB' id='form1' type='date' value="01/01/2001" 
                        value={this.state.form.dob} onChange={this.changeDob.bind(this)}/> 
                        </div>
                    </div>

                    <div class="row">
                            <div class="col-6">
                                <button type="button" class="btn btn-primary w-100" onClick={this.formSubmitted.bind(this)}
                                
                                >Submit</button>
                            </div>
                            <div class="col-6">
                                <button type="reset" class="btn btn-warning w-100">Reset</button>
                            </div>
                        </div>
                    </div>

                 </form>    */}

              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
       

       {/* Form data */}
       <form ref="form2">
                <div class="container border border-primary px-2 py-2 rounded-5 w-100">
                    <div class="col-sm-12 px-2 py-2 alert alert-success">
                            <p class="text-center">
                            Enter Employee Details
                            </p>
                    </div>
                
                    
                    <div class="row px-2">
                        <div class="md-form mt-0 form-outline" >
                        
                        <MDBInput label='First Name' id="firstname" type='text'pattern="[a-zA-Z ]{2,}$" 
                        value={this.state.form.firstName} onChange={this.changeFirstName.bind(this)}/> 
                    </div>
                    </div>
                
                    <div class="row px-2">
                        <div class="md-form mt-0 form-outline" >
                    
                        <MDBInput label='Last Name' id='lastname' type='text'pattern="[a-zA-Z ]{2,}$" 
                        value={this.state.form.lastName} onChange={this.changeLastName.bind(this)}/> 
                    </div>
                    </div>
                
                    <div class="row px-2">
                        <div class="md-form mt-0 form-outline" >
                        <MDBInput label='Email Id' id='email' type='text' pattern="[a-z0-9._%+-]+@[a-z0-9.-]{2,}$" 
                        value={this.state.form.email} onChange={this.changeMail.bind(this)}/> 
                    </div>
                    </div>
                
                        <div class="row px-2">
                            <div class="md-form mt-0 form-outline" >
                            <MDBInput label='Mobile Number' id='mobile' type='number' 
                            value={this.state.form.mobile} onChange={this.changephone.bind(this)} /> 
                        </div>
                    </div>
                    
                        <div class="row px-2">
                          <div class="md-form mt-0 form-outline" >
                          <MDBInput label='DOB' id='dob' type='date' value="01/01/2001" 
                          value={this.state.form.dob} onChange={this.changeDob.bind(this)}/> 
                          </div>
                    </div>

                    <div class="row">
                            <div class="col-6">
                                <button type="button" class="btn btn-primary w-100" 
                                 onClick={this.formSubmitted.bind(this)}
                                >Submit</button>
                            </div>
                            <div class="col-6">
                                <button type="reset" class="btn btn-warning w-100" onClick={this.reset.bind(this)}>Reset</button>
                            </div>
                        </div>
                    </div>

                 </form>   
           

           
       </> );

    }

}


export default employee;