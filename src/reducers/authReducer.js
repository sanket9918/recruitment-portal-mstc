import { SET_CURRENT_USER, SET_CURRENT_ORG } from '../actions/types'
const isEmpty = require('is-empty');
const initialState = {
    isAuthenticated: false,
    isAuthenticated_org: false,
    user: {},
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        case SET_CURRENT_ORG:
            return {
                ...state,
                isAuthenticated_org: !isEmpty(action.payload),
                org: action.payload
            }

        default:
            return state;
    }
}