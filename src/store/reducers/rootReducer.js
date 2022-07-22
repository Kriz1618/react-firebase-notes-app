import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import noteReducer from './noteReducer';

const rootReducer = combineReducers({
    note: noteReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

export default rootReducer;
