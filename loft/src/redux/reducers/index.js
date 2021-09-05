import { combineReducers } from "redux";
import basketReducer from "./basketReducer";
import productsReducer from "./productsReducer";

let allReducers=combineReducers({
    allProducts:productsReducer,
    basket:basketReducer
})

export default allReducers;