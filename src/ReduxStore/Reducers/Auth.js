import * as actionTypes from '../Actions/ActionTypes';
import { updateObject } from '../Shared';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: '/',
    Credentials: {
        Email: '',
        Username: '',
        Password: ''
      },
};

/**
     * Authentication success handler.
     * @function authSuccess
     * @param {state} - current state retrieved.
     * @param {action} - action retrieved.
     */
const authSuccess = (state, action) => {
    return updateObject( state, { 
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false,
        Credentials: {
            Email: action.Email,
            Username: action.Username,
            Password: action.Password
          },
     } );
};

/**
     * Authentication failure handler.
     * @function authFail
     * @param {state} - current state retrieved.
     * @param {action} - action retrieved.
     */
const authFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

/**
     * Set the redirection path after authentication process.
     * @function setAuthRedirectPath
     * @param {state} - current state retrieved.
     * @param {action} - action retrieved.
     */
const setAuthRedirectPath = (state, action) => {
    return updateObject(state, { authRedirectPath: action.path })
}

/**
     * Intialize new reducer to perform certain actions.
     * @function reducer
     * @param {state} - current state retrieved.
     * @param {action} - action retrieved.
     */
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state,action);
        default:
            return state;
    }
};

export default reducer;