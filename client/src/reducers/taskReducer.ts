import { FECTH_TASKS } from "../actions/types";
// returns null when it's loading the request
export default function allTasksReducer(state = null, action: any) {
    switch (action.type) {
        case FECTH_TASKS:
            return action.payload || false; // "" === false, so if it's empty it returns false
        default:
            return state;
    }
}