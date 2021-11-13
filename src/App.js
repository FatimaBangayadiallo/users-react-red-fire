import "./App.css";
import { render } from "@testing-library/react";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DisplayAllUsers from "./Components/displayUser";
import Add from "./Components/AddUsers";
import { connect } from "react-redux";
import { getAllUsers } from "./actions/userAction";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "Bah",
          email: "Bah@gmail.com",
          gen: 2,
          id: "675096gfdsasasd789568",
        },
        {
          name: "Sow",
          email: "Sow@gmail.com",
          gen: 12,
          id: "58965945dfhfgjk091243",
        },
      ],
    };
  }
  componentDidMount() {
    this.props.getAllUsers();
  }
  // ----------------------a methode to add a new user----------------------------------
  // AddNnewUser = (newUser) => {
  //   newUser.id = Math.random().toString();
  //   this.setState({
  //     users: [...this.state.users, newUser],
  //   });
  // };
  // -----------------------end of the methode---------------------------------------

  // -------------------------deleteUser methode------------------------------------

  // deleteUser = (id) => {
  //   const undeletedUsers = this.state.users.filter(
  //     (userItem) => userItem.id !== id
  //   );
  //   this.setState({
  //     users: undeletedUsers,
  //   });
  // };
  // --------------------------end of delete user methode---------------------------

  // ------------------methode to edit a user-----------------------------------------
  // EditUser = (id, updatedUser) => {
  //   this.setState({
  //     users: this.state.users.map((userItem) =>
  //       userItem.id === id ? updatedUser : userItem
  //     ),
  //   });
  // };

  // -----------------------end of the methode---------------------------------=======
  render() {
    return (
      <>
        <Container fluid style={{ marginTop: "2rem" }}>
          <Row>
            <Col md="4">
              <h3>add users form</h3>
              <Add AddNnewUser={this.AddNnewUser} />
            </Col>

            <Col md="6">
              <h3>Display users </h3>
              <DisplayAllUsers
                usersData={this.state.users}
                deleteUser={this.deleteUser}
                EditUser={this.EditUser}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
const mapDispatchToProps = {
  getAllUsers,
};

export default connect(null, mapDispatchToProps)(App);
