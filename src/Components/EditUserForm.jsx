import React from "react";
import { Form, Button } from "react-bootstrap";
import { EditUser } from "../actions/userAction";
import { connect } from "react-redux";

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.userInfo.name,
      email: props.userInfo.email,
      gen: props.userInfo.gen,
      id: props.userInfo.id,
    };
  }
  // we defife our function handleChange
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log("je suis le state", this.state);
  };
  // ----------------------we define handle submit here--------------------------------------
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.EditUser(this.state.id, this.state);
    this.setState({
      name: "",
      email: "",
      gen: "",
    });
    this.props.CloseModal();
    console.log("le form est submit", this.state);
  };

  // -------------------------------------------------------
  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          {/* name */}
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="txt"
              placeholder="Enter name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Group>
          {/* email */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>
          {/* gen  */}
          <Form.Group className="mb-3" controlId="formBasicGen">
            <Form.Label>Gen</Form.Label>
            <Form.Control
              type="number"
              placeholder="gen"
              name="gen"
              value={this.state.gen}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}
const mapDispatchToProps = {
  EditUser,
};
export default connect(null, mapDispatchToProps)(Edit);
