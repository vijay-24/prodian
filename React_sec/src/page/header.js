import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import { MDBDropdownToggle, MDBDropdown,
  MDBAvatar, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";




class header extends React.Component {
  render(){
    return (<>
    <br></br>
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick="demo()">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">about</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


    
     {/* Anchor tag role button and class related button and href can be accept... */}
      <a class="btn btn-primary mx-2" href="/" role="button">Anchor tag role Button (Header page)</a>

      {/* Anchor tag outside new button inside,  */}
      <a href="/home"><button type="button" class="btn btn-primary px-2 mx-2"style={{width:'80px'}} >Home</button></a>  
      <a href="/about"><button type="button" class="btn btn-primary mx-2" style={{width:'155px'}}>About</button></a>  
      <a href="/login" class="btn btn-primary mx-2" role="button" style={{width:'155px'}}>Login</a>
      <a href="/form" class="btn btn-primary mx-2" role="button" style={{width:'155px'}}>Form</a>
      <a href="/form2" class="btn btn-primary mx-2" role="button" style={{width:'155px'}}>Form 2</a>
      <a href="/feedback" class="btn btn-primary mx-2" role="button" style={{width:'155px'}}>FeedBack</a>
      <a href="/employee" class="btn btn-primary mx-2" role="button" style={{width:'155px'}}>Employee</a>
      <a href="/sports" class="btn btn-primary mx-2" role="button" style={{width:'155px'}}>Sports</a>
      <a href="/form3" class="btn btn-primary mx-2" role="button" style={{width:'155px'}}>Form3</a>
      <a href="/employee2" class="btn btn-primary mx-2" role="button" style={{width:'155px'}}>Emplyee 2</a>
    <hr></hr>
    </>
        );
        
       
  };
}
  
  export default header;

