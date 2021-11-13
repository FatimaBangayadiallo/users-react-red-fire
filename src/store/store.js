// import { createStore } from "redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers/userReducer";
import firebase from "../firebase/config";

import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(firebase),
    reduxFirestore(firebase)
  )
);
export default store;
// applyMiddleware(
//   thunk.withExtraArgument({ getFirebase, getFireStore }),
//   reduxReactFirebase(firebase),
//   reduxFireStore(firebase)
