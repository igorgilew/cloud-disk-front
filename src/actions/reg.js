import {registration} from "../api/userApi";

export const register = async (email, password) => {

    await registration({email, password})
        .then((response) => {
            alert("успех");
        })
        .catch(error => {
            alert(error)
        });
};