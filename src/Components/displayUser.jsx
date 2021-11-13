import React from "react";
import OneUser from "./user";
import { Container, Row } from "react-bootstrap";
import { connect } from "react-redux";

const DisplayAllUsers = (props) => {
  return (
    <>
      <Container>
        <Row>
          {props.users.map((userItem) => {
            return (
              <OneUser
                userInfo={userItem}
                key={userItem.id}
                deleteUser={props.deleteUser}
                EditUser={props.EditUser}
              />
            );
          })}
        </Row>
      </Container>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};
export default connect(mapStateToProps)(DisplayAllUsers);
