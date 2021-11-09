import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
// import {MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,mdbForm, mdbInput,MDBBtnGroup
// } from "mdbreact";

import { MDBInput } from 'mdb-react-ui-kit';
import {MDBIcon} from 'mdbreact';

// import {ButtonGroup,Button,DropdownButton,Dropdown} from 'bootstrap';

import {ButtonGroup,Button,DropdownButton,Dropdown, FormGroup} from 'react-bootstrap';  

class form extends React.Component {
    constructor(props) {

      super(props);
      this.state = {value: 'good'};
       
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
     
      
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
     
      console.log(this.state.value);
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      console.log("info : "+this.state.value)
      event.preventDefault();
    }

    // MOdel'
   
   
  
    render() {
      return (<>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>


        
      <ButtonGroup>
        <Button>1</Button>
        <Button>2</Button>

        <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>


          <ButtonGroup>
          <MDBIcon fas icon="phone" />
                <MDBInput label='Phone' id='form1' type='number'/>
          </ButtonGroup>
          

       


     </> );
    }
  }

  export default form;

 
  
   
  