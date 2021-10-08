import { combineReducers } from "redux";
import bookReducer from "./BookReducer";
import tourReducer from "./TourReducer";

const mainReducer =  combineReducers({
    'tour': tourReducer,
    'book': bookReducer
})
export default mainReducer