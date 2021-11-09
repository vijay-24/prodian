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
      people: [
        { "id" :1 ,"firstName": "John", "lastName": "Doe", "dob": "12/12/2010" ,"email":"john@gmail.com","mobile":"9788331203"},
        { "id" :2 ,"firstName": "Michael", "lastName": "Smith", "dob": "12/12/2010","email":"michael@gmail.com" ,"mobile":"9788331203"},
        { "id" :3 ,"firstName": "Carol", "lastName": "Jordan", "dob": "12/12/2010","email":"carol@gmail.com","mobile":"9788331203" },
        { "id" :4 , "firstName": "Tanya", "lastName": "Blake", "dob": "12/12/2010","email": "tanya@gmail.com","mobile":"9788331203"}
    
      ]
    };

    this.addPerson = this.addPerson.bind(this);
    this.deletePerson = this.deletePerson.bind(this);

    // form
    this.formSubmit = this.formSubmit.bind(this);
  }

  addPerson(firstName,lastName, email,mobile, dob) {
    this.setState(prevState => ({
      people: [...prevState.people, { firstName,lastName, email,mobile, dob }]
    }));
  }

  componentDidMount() {
    this.getPeople();
  }

  getPeople() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then(response => response.json())
    //   .then(response => this.setState({ people: response }))
    //   .catch(error => console.log(error));

      this.setState({ people: this.state.people })
  }

  deletePerson(email) {
    return () => {
      this.setState(prevState => ({
        people: prevState.people.filter(person => person.email !== email)
      }));
    };
  }

//   ----form
  formSubmit(event) {
     console.log("formsubmit");
    event.preventDefault();
    const form = event.target;
    const email = form.elements["email"].value;
    const first = form.elements["firstname"].value;
    const last = form.elements["lastname"].value;
    const mobile = form.elements["mobile"].value;
    const dob = form.elements["dob"].value;
    
    this.addPerson(first,last, email,mobile,dob);
    form.reset();
  }



render(){
    return(<>

<h1 class="border border-primary blue rounded-5 text-center">Employee Details Form</h1><br></br>
  {/* Model called from model.js */}
   
           {/* Model */}
      {/* Button trigger modal  */}
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      ADD
    </button>

    {/* Table */}
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
                    {this.state.people.map((person, index) => {
                    return (
                    <tr key={person.email}>
                    <th>{index + 1}</th>
                    <td>{person.firstName}</td>
                    <td>{person.lastName}</td>
                    <td>{person.email}</td>
                    <td>{person.dob}</td>
                    <td>{person.mobile}</td>
                    <td>
                        <button class= "btn btn-danger ml-2" onClick={this.deletePerson(person.email)}>
                            Delete
                        </button>
                    </td>
                    </tr>
                );
                })}
            </tbody>
      </table>
    </div>

{/* Table close********************** */}

{/* --------------------Model------------------------ */}
   

    {/* <!-- Modal --> */}
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel"></h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">

            <form onSubmit={this.formSubmit.bind(this)}>
                 <div class="container border border-primary px-2 py-2 rounded-5 w-100">
                    <div class="col-sm-12 px-2 py-2 alert alert-success">
                            <p class="text-center">
                            Enter Employee Details
                            </p>
                    </div>
            
                
                    <div class="row px-2">
                        <div class="md-form mt-0 form-outline" >
                            <MDBInput label='First Name' id="firstname" type='text'pattern="[a-zA-Z ]{2,}$" 
                            /> 
                        </div>
                    </div>
            
                    <div class="row px-2">
                        <div class="md-form mt-0 form-outline" >
                            <MDBInput label='Last Name' id="lastname" type='text'pattern="[a-zA-Z ]{2,}$" 
                            /> 
                        </div>
                    </div>  
            
                    <div class="row px-2">
                        <div class="md-form mt-0 form-outline" >
                            <MDBInput label='Email Id' id="email" type='text' pattern="[a-z0-9._%+-]+@[a-z0-9.-]{2,}$" 
                            /> 
                        </div>
                    </div>
            
                    <div class="row px-2">
                        <div class="md-form mt-0 form-outline" >
                            <MDBInput label='Mobile Number' id="mobile" type='number' 
                            /> 
                        </div>
                    </div>
                
                    <div class="row px-2">
                        <div class="md-form mt-0 form-outline" >
                            <MDBInput label='DOB' id="dob" type='date'  
                            /> 
                        </div>
                    </div>

                    <div class="row">
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary w-100"                           
                                >Save</button>
                            </div>
                    </div>

                    <div class="row">
                            <div class="col-6">
                                <button type="button" class="btn btn-secondary w-100" data-bs-dismiss="modal"                          
                                >Close</button>
                            </div>
                            <div class="col-6">
                                <button type="reset" class="btn btn-warning w-100">Reset</button>
                            </div>
                    </div>
                </div>
                

              </form>  


          </div>
        </div>
      </div>
   </div>

        {/* modal pop up window finish */}
       

<br></br>
 

    </>);
}
}


export default employee;