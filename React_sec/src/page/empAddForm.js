import React, { useState } from 'react';
import { MDBInput } from 'mdb-react-ui-kit';
import {MDBIcon} from 'mdbreact';
import { Data } from '../page/data.json';
import contacts from '../page/data.json';

class empAddForm extends React.Component{

    constructor(props) {
        super(props);
    
        this.state = {
          form: {
            firstName: props.firstName,
            lastName: props.lastName,
            mail: props.mail,
            phone: props.phone,
            dob:props.dob
          }
        }
      }

      changeFirstName(event) {
        var form        = this.state.form;
        form.firstName  = event.target.value;
    
        this.setState({ form: form });
      }
      changeLastName(event) {
        var form        = this.state.form;
        form.lastName  = event.target.value;
    
        this.setState({ form: form });
      }
      changeMail(event) {
        var form        = this.state.form;
        form.mail  = event.target.value;
    
        this.setState({ form: form });
      }
      changephone(event) {
        var form        = this.state.form;
        form.phone  = event.target.value;
    
        this.setState({ form: form });
      }
      changeDob(event) {
        var form        = this.state.form;
        form.dob  = event.target.value;
    
        this.setState({ form: form });
      }
      formSubmitted() {
        alert("good : "+this.state.form.firstName+" "+this.state.form.lastName+" "+this.state.form.mail+" "+this.state.form.phone+" "+this.state.form.dob);
      console.log(this.state.form);
      console.log(this.state.form.firstName);
      console.log(this.state.form.lastName);
      console.log(this.state.form.mail);
      console.log(this.state.form.phone);
      console.log(this.state.form.dob);
      this.Data = this.state.form;

      contacts.push(this.state.form);
      for (let i = 0; i < this.state; i++) {
        console.log(this.state.form(i));
      }
    }

   
    render(){
        return(<>
           
            <form onSubmit={this.formSubmitted.bind(this)}>
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
                        value={this.state.form.mail} onChange={this.changeMail.bind(this)}/> 
                    </div>
                    </div>
                
                        <div class="row px-2">
                            <div class="md-form mt-0 form-outline" >
                            <MDBInput label='Mobile Number' id='form1' type='number' 
                            value={this.state.form.phone} onChange={this.changephone.bind(this)} /> 
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
                                <button type="submit" class="btn btn-primary w-100" 
                                
                                >Submit</button>
                            </div>
                            <div class="col-6">
                                <button type="reset" class="btn btn-warning w-100">Reset</button>
                            </div>
                        </div>
                    </div>

                 </form>   

   
       </> );
    }

}

export default empAddForm;