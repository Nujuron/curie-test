import { combineReducers } from "redux";
import allTasksReducer from "./taskReducer";

export default combineReducers({
    allTasks: allTasksReducer
})