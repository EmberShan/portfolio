import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

import {Button} from 'react-bootstrap'
import React from "react";

import './style.scss'


function MyVerticallyCenteredModal(props) {

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
            {props.imgs.map((img, index) => (
                <img src={img.src} key={index} alt={img.name}
                style={{
                    width: '100%', 
                    marginBottom: '10px', 
                }}></img>
            ))}
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


const CustomModal = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button> */}

      <span className="thumbnail-img"
        onClick={() => setModalShow(true)}
        style={{
            cursor: 'pointer', 
        }}>
          <img src={props.imgs[0].src}></img>
      </span>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        imgs = {props.imgs}
        title = {props.title}
      />
    </>
  );
}

export default CustomModal
