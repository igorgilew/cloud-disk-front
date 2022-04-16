const SET_AUTHENTICATED = 'SET_AUTHENTICATED';
const LOGOUT = 'LOGOUT';

const defaultState = {
    currentUser: {},
    isAuth: false
};

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_AUTHENTICATED: {
            return {
                ...defaultState,
                currentUser: action.payload,
                isAuth: true
            }
        }
        case LOGOUT: {
            localStorage.removeItem('token');
            return {
                ...state,
                currentUser: {},
                isAuth: false
            }
        }
        default:
            return state;
    }
}

export const setAuthenticated = (payload) => ({type: SET_AUTHENTICATED, payload});
export const setLogout = () => ({type: LOGOUT});