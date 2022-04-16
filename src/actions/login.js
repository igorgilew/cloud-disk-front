import {setAuthenticated} from "../reducers/userReducer";
import {loginByToken, loginByUserData} from "../api/userApi";
import {lsTokenKey} from "../properties";

export const authByEmailAndPassword = (userData) => {
    return async dispatch => {
        await loginByUserData(userData)
            .then(response => {
                alert('успех');
                console.log(response)
                dispatch(setAuthenticated(response.data))
                setTokenToLocalStorage(response.headers.authorization);
            })
            .catch(error => {
                console.log(error)
                alert(error)
            });
    };
}

export const authByToken = () => {
    return async dispatch => {
        const token = localStorage.getItem(lsTokenKey);
        if (token) {
            await loginByToken(token)
                .then(response => {
                    dispatch(setAuthenticated(response.data));
                    setTokenToLocalStorage(response.headers.authorization);
                })
                .catch(error => {
                    localStorage.removeItem(lsTokenKey);
                })
        }
    }
}

const setTokenToLocalStorage = (token) => {
    token = token.replace("Bearer ", "");
    localStorage.setItem(lsTokenKey, token);
}
