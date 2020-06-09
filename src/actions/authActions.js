import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken'
import { SET_CURRENT_USER, GET_ERRORS,SET_CURRENT_ORG } from './types'

// Register the user

export const registerUser = (userData, history) => dispatch => {
    axios
        .post('/api/users/register', userData)
        .then(res => history.push('/'))
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
};

export const loginUser = userData => dispatch => {
    axios
        .post('/api/users/login', userData)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded));
        })
        .catch(
            err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
            }
        )
}

export const registerOrg = (orgData, history) => dispatch => {
    axios
        .post('/api/orgs/register', orgData)
        .then(res => history.push('/'))
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
};

export const loginOrg = (orgData) => dispatch => {
    axios
        .post('/api/orgs/login', orgData)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentOrg(decoded));

        })
        .catch(
            err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
            }
    )
}


export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const setCurrentOrg = decoded => {
    return {
        type: SET_CURRENT_ORG,
        payload: decoded
    }
}

export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
}