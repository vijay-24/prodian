import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';


const home = () => {
    return (<><h1>This is the Home </h1><br></br>
    <a href="/about" class="btn btn-primary mx-2" role="button">About</a>
    <a href="/" class="btn btn-primary mx-2" role="button">Header</a>
    <a href="/login" class="btn btn-primary mx-2" role="button">Login</a>

    <hr></hr>
    
    {/* Table */}

<div class="container w-75 border border-1 border-primary text-center rounded-5 p-1 mx-1 my-1 py-1 px-1 ">    
    <MDBTable>
      <MDBTableHead>
        <tr>
          <th>#</th>
          <th>First</th>
          <th>Last</th>
          <th>Handle</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
    </div>




    </>
        );
  };
  
  export default home;