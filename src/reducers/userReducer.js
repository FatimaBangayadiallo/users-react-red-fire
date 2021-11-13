const initialState = {
  users: [],
};

const reducer = (state = initialState, action) => {
  // -----------------------------------action to add a user----------------------
  if (action.type === "ADD_USER") {
    console.log("the action payload", action.payload);

    return { ...state, users: [...state.users, action.payload] };
  }
  // ----------------------------action to edit a partular user------------------
  if (action.type === "EDIT_USER") {
    const updatedUsers = state.users.map((userItem) => {
      if (userItem.id === action.payload.id) {
        return action.payload.updatedUser;
      }
      return userItem;
    });
    return { ...state, users: updatedUsers };
  }

  // ----------------------------------case to delete a partucular user-------------------------------
  if (action.type === "DELETE_USER") {
    const undeletedUsers = state.users.filter(
      (userItem) => userItem.id !== action.payload
    );
    return { ...state, users: undeletedUsers };
  }
  if (action.type === "SET_ALL_USERS") {
    return { ...state, users: action.payload };
  } else return state;
};
export default reducer;
