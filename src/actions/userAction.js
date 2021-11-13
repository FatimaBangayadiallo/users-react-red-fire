import { getFirebase } from "react-redux-firebase";

// how add a new user
export const AddNnewUser = (newUser) => {
  // newUser.id = Math.random().toString(36).slice(2);
  // return {
  //   type: "ADD_USER",
  //   payload: newUser,
  // };
  // ------------------------------------------------------------------------------
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("users")

      .add({
        ...newUser,
        timestamp: getFirestore().FieldValue.serverTimestamp(),
      })
      .then(() => {
        dispatch({
          type: "ADD_USER",
          payload: newUser,
        });
      });
  };
};
// how to update a user

export const EditUser = (id, updatedUser) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("users")
      .doc(id)
      .update(updatedUser)
      .then(() => {});
  };
  // return {
  //   type: "EDIT_USER",
  //   payload: { id, updatedUser },
  // };
};
// action creator how to delelte a user
export const deleteUser = (id) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("users")
      .doc(id)
      .delete()
      .then(() => {});
  };
  // return {
  //   type: "DELETE_USER",
  //   payload: id,
  // };
};
// action to retrieve a user from fireStore to the store
export const getAllUsers = () => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("users")
      .orderBy("timestamp", "desc")
      .onSnapshot(
        (Snapshot) => {
          let users = [];
          Snapshot.forEach((doc) => {
            users.push({ ...doc.data(), id: doc.id });
          });
          console.log(users);
          dispatch({ type: "SET_ALL_USERS", payload: users });
        },

        (error) => {}
      );
  };
};
