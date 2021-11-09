import React from 'react';
import {MDBIcon} from "mdbreact";

import { MDBInput } from 'mdb-react-ui-kit';

class login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            login: {
              userName: props.userName,
              password: props.password,
              }
          }
      }
    
      handleUserNameChanged(event) {
        var login        = this.state.login;
        login.userName  = event.target.value;
        this.setState({ login: login });
      }

      handlePasswordChanged(event) {
        var login        = this.state.login;
        login.password  = event.target.value;
        this.setState({ login: login });
      }
    
      handleButtonClicked() {
        console.log(this.state.login);
        console.log(this.state.login.userName);
        console.log(this.state.login.password);
        window.location.replace("http://localhost:3000/form");
        
      }
   
    render() {
    return (<><h1 class="border border-primary blue rounded-5 text-center">Login Form</h1><br></br>
   
  
        {/* Login Form Page code */}

<div class="container py-2 p-3 align-items-center rounded-5 float-sm-none w-50" >     
    <form mdbForm class="" novalidate>
        <div class="row py-5">
            <div class="col-md-8" >
                <div class="md-form mt-0 form-outline" >
                    <MDBIcon fas icon="envelope" />
                    <MDBInput label='Email Id' id='form1' type='text'pattern="[a-z0-9._%+-]+@[a-z0-9.-]{2,}$" name="email" value={this.state.login.userName} 
                      onChange={this.handleUserNameChanged.bind(this)} />
                   
                </div>
            </div>
        </div>

        <div class="row py-5">
            <div class="col-md-8" >
                <div class="md-form mt-0 form-outline">
                <MDBIcon fas icon="key" />
                    <MDBInput label='Password' id='form1' type='password' pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,15}$" name="pass" value={this.state.login.password} 
                        onChange={this.handlePasswordChanged.bind(this)} autocomplete="on"/>
                  </div>
            </div>
        </div>

        <div class="row">
            <div class="col-4">
                <button class="btn btn-primary w-100" >Sign Up</button>
            </div>
            <div class="col-4">
                <button type="submit" class="btn btn-primary w-100" id="submit" 
                onClick={this.handleButtonClicked.bind(this)}>Sign In</button>
            </div>          
        </div>
    </form>
</div>

    </>
        );
    }
  }
  
  export default login;