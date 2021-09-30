import axios from 'axios';
import { FECTH_TASKS } from './types';
import { Dispatch } from 'redux';
// reduxThunk handles the function
export const fetchTasks = () => async (dispatch: Dispatch<any>) => {
    const res = await axios.get(''); // dispatch the action after we get a response
    dispatch({ type: FECTH_TASKS, payload: res.data });
};
