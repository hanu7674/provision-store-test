import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, SET_USER_DATA_SUCCESS } from '../reducers/types';
import sha256 from 'crypto-js/sha256';
import { notify } from 'reapop';


export const loginRequest = () => ({
    type: LOGIN_REQUEST
});

export const loginSuccess = (token) => ({
    type: LOGIN_SUCCESS,
    payload: token
});
export const setUserData = (data) => ({
    type: SET_USER_DATA_SUCCESS,
    payload: data
});
export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error
});

export const login = (username, password) => {
    return async (dispatch) => {
        dispatch(loginRequest());
        try {
            const hashedPassword = sha256(password).toString();

            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Basic UHJvbWlsbzpxNCE1NkBaeSN4MiRHQg==");
            const formData = new FormData();
            formData.append('username', username);
            formData.append('password', hashedPassword);
            formData.append('grant_type', 'password');

            const response = await fetch('https://apiv2stg.promilo.com/user/oauth/token', {
                method: 'POST',
                headers: myHeaders,
                body: formData,
            });
            if (response) {
                const data = await response.json();
                if (data.status.code === 200) {
                    const token = data.response.access_token;
                    localStorage.setItem('authToken', token);
                    localStorage.setItem('userData', JSON.stringify(data.response));
                    dispatch(loginSuccess(data));
                    dispatch(notify({ message: `Login success`, status: 'success' }))
                    dispatch(notify({ message: `Redirecting to Products`, status: "loading" }));
                    setTimeout(() => {
                        window.location.href = '/products'
                    }, 1000)
                }
                else {
                    dispatch(loginFailure(data));
                    dispatch(notify({ message: data.status.message, status: 'error' }))
                }
            }
        } catch (error) {
            dispatch(loginFailure(error.message));
        }
    };
};
export const logout = () => {
    return async (dispatch) => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userData');
        dispatch(loginSuccess(null));
        dispatch(notify({ message: `Logout success`, status: 'info' }))
        dispatch(notify({ message: `Redirecting to Login`, status: "loading" }));
        setTimeout(() => {
            window.location.href = '/login'
        }, 1000)
    };
}