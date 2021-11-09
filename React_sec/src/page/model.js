import React, { useState } from 'react';
import { MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

import { MDBInput } from 'mdb-react-ui-kit';
import {MDBIcon} from 'mdbreact';
import EmpAddForm from './empAddForm';




export default function ModelUser() {
//   const [basicModal, setBasicModal] = useState(false);
  const [basicModal, setBasicModal] =useState('');
  const toggleShow = () => setBasicModal(!basicModal);


//   Form data getting function


  return (
    <>
    <MDBBtn onClick={toggleShow}>ADD</MDBBtn>
    <MDBModal show={basicModal} getOpenState={(e) => setBasicModal(e)} tabIndex='-1'>
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>Modal title</MDBModalTitle>
            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>

                {/* Form data */}
                  <EmpAddForm/>

          </MDBModalBody>

          <MDBModalFooter>
            <MDBBtn color='secondary' onClick={toggleShow}>
              Close
            </MDBBtn>
            <MDBBtn>Save changes</MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
    </>
  );
}