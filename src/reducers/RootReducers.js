import { combineReducers } from "redux";
import bookReducer from "./BookReducer";
import tourReducer from "./TourReducer";
import userReducer from "./UserReducer";

const mainReducer =  combineReducers({
    'tour': tourReducer,
    'book': bookReducer,
    'user': userReducer
})
export default mainReducer