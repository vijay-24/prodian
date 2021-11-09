import React from 'react';
import {} from 'react-bootstrap';
import { MDBInput } from 'mdb-react-ui-kit';
import {MDBIcon} from 'mdbreact';


class feedback extends React.Component{

    constructor(props) {
        super(props);
    
        this.state = {
          form: {
            name: props.name,
            mail: props.mail,
            phone: props.phone,
            msg:props.msg
          }
        }
      }
    
      changeName(event) {
        var form        = this.state.form;
        form.name  = event.target.value;
    
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
      changeMsg(event) {
        var form        = this.state.form;
        form.msg  = event.target.value;
    
        this.setState({ form: form });
      }
      formSubmitted() {
          alert("good : "+this.state.form.name+" "+this.state.form.mail+" "+this.state.form.phone+" "
          +this.state.form.msg);
        console.log(this.state.form);
        console.log(this.state.form.name);
        console.log(this.state.form.mail);
        console.log(this.state.form.phone);
        console.log(this.state.form.msg);
      }

    render(){
        return(<>
        
        <h1 class="border border-primary blue rounded-5 text-center">Feedback Form</h1><br></br>
       
<form onSubmit={this.formSubmitted.bind(this)}>
    <div class="container border border-primary px-2 py-2 rounded-5 w-50" >
        <div class="col-sm-12 px-2 py-2 alert alert-success rounded-5">
            <p class="text-center">
              Enter Your Feedback 
            </p>
          </div>
          
          <div class="col-sm-12 py-4">
            <div class="md-form">
                <MDBIcon fas icon="user" />
                <MDBInput label='Name' id='form1' type='text'pattern="[a-zA-Z ]{2,}$" value={this.state.form.name} onChange={this.changeName.bind(this)} />
             </div>
         </div>

         <div class="col-sm-12 py-4">
            <div class="md-form">
            <MDBIcon fas icon="envelope" />
                <MDBInput label='Mail Id' id='form1' type='text'pattern="[a-z0-9._%+-]+@[a-z0-9.-]{2,}$" value={this.state.form.mail} onChange={this.changeMail.bind(this)} />
            </div>
         </div>

         <div class="col-sm-12 py-4">
            <div class="md-form">
            <MDBIcon fas icon="phone" />
                <MDBInput label='Phone' id='form1' type='number' pattern="[0-9]{10,10}$" value={this.state.form.phone} onChange={this.changephone.bind(this)} />
            </div>
         </div>
        
        <div class="col-sm-12 ">
                <div class="md-form py-4">
                <MDBIcon fas icon="pencil-alt" />
                   <MDBInput label='Message' id='textAreaExample' textarea rows={4} value={this.state.form.msg} onChange={this.changeMsg.bind(this)}/>
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


    <br></br>
  

        </>);
    }

}

export default feedback;

 