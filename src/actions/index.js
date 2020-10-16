import axios from 'axios';
import {FETCH_BANK_DETAILS} from './types';

export const fetchBankDetails = () => async dispatch => {
    const res = await axios.get('/');

    dispatch({
        type: FETCH_BANK_DETAILS,
        payload: res.data
    })
}
