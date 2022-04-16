import axios from "axios";
import {backend_url} from "../properties";

export const loginByUserData = async ({email, password}) => await axios.post(`${backend_url}/api/login`, {
    email,
    password
});

export const loginByToken = async (token) => await axios.get(`${backend_url}/api/login`, {
    headers : {Authorization: `Bearer ${token}`}
});