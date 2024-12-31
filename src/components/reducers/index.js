import { combineReducers } from "redux";
import { todolistReducer } from "./todolist";

export const allReducers = combineReducers({
    todolistReducer
})