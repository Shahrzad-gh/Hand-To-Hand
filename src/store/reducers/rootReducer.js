import { combineReducers } from "redux";
import postReducer from "./postReducer";
import {firestoreReducer} from 'redux-firestore';

const rootReducer = combineReducers({
  post: postReducer,
  firestore: firestoreReducer
});

export default rootReducer;
