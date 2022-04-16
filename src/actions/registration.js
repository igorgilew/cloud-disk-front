import axios from "axios";
import {backend_url} from "../properties";

export const registration = async (userRegData) => await axios.post(`${backend_url}/api/registration`, userRegData);

