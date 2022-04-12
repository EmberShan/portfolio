import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

import {Button} from 'react-bootstrap'

import './style.scss'

import { MouseContext } from '../context/mouse-context'

function MyVerticallyCenteredModal(props) {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  
  return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {/* need to hide the custom cursor */}
            <iframe 
            className="pdf-frame"
            src={require('../../imgs/resume/resume-Ember.pdf')} 
                onMouseEnter={() => cursorChangeHandler("hide")}
                onMouseLeave={() => cursorChangeHandler("")}
            ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} style={{
              backgroundColor: '#003049', 
              cursor: 'none', 
          }}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }


const Modalpdf = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="pdf-wrapper">
      <Button variant="primary" onClick={() => setModalShow(true)}
        className="pdf-button"
      >
        Check Resume
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        imgs = {props.imgs}
        title = {props.title}
      />
    </div>
  );
}

export default Modalpdf
