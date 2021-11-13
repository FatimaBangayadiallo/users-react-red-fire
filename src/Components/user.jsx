import React, { useState } from "react";
import { Card, Button, Col, Modal } from "react-bootstrap";
import Edit from "./EditUserForm";
import { deleteUser } from "../actions/userAction";
import { connect } from "react-redux";

const OneUser = (props) => {
  // we create a state for our modal-----------------
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // ----------end of the modal state---------------

  // handleDelete methode-------------------------------------
  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteUser(props.userInfo.id);
    console.log("itme deleted!");
  };
  // end-------------------of handleDelete methode
  return (
    <>
      {/* ---------------------------------the modal start----------------------------------- */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Edit
            userInfo={props.userInfo}
            EditUser={props.EditUser}
            CloseModal={handleClose}
          />
        </Modal.Body>
      </Modal>
      {/* --------------------------------the modal end---------------------------------------- */}
      <Col>
        <Card style={{ width: "10rem" }}>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              all the informtaion about a user
            </Card.Subtitle>
            <Card.Title>name: {props.userInfo.name}</Card.Title>

            <Card.Text>
              <p>email: {props.userInfo.email}</p>
              <p>gen: {props.userInfo.gen}</p>
            </Card.Text>
            <Button variant="primary" size="sm" onClick={handleShow}>
              Edit
            </Button>
            <Button variant="danger" size="sm" onClick={handleDelete}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
const mapDispatchToProps = {
  deleteUser,
};
export default connect(null, mapDispatchToProps)(OneUser);
