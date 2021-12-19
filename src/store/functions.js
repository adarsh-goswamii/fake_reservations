import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addUser, validateUser } from "./action_creators";
import { actions } from './store';

export const checkEmail = (email) => {
    let regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regexp.test(String(email).toLowerCase());
}

export const RegisterValid = (email, number, password, confirmPassword) => {
    return async (dispatch) => {
        let valid = checkEmail(email);
        if (!valid) { alert("Enter a valid email"); return; }
        valid &= String(number).length == 10;
        if (!valid) { alert("Enter a valid number"); return; }
        valid &= (String(password).length > 6);
        if (!valid) { alert("Password too short"); return; }
        valid &= (password === confirmPassword);
        if (!valid) { alert("Password don't match, try again"); return; }

        await addUser(email, number, password)();
        return;
    }
}

export let LoginValid = (email, password, _dispatch, history) => {
    return async (dispatch) => {
        console.log("checking wait");
        let valid = checkEmail(email);
        if (!valid) { alert("Enter a valid email"); return; }
        valid &= password !== undefined;
        valid &= String(password).length > 6;
        if (!valid) { alert("Password too short"); return; }

        let match = await validateUser(email, password)();
        console.log(match);
        if (!match) alert("No user found with given credentials");
        else {
            await _dispatch(actions.toggleLoggedin());
            history.replace('/plan-journey');
            console.log('logged in');
        }

        return;
    };
};

export const logout = () => {
    console.log('logged out');
}

export const bookReservation = (src, dst, date) => {
    console.log('Reservation complete', src, dst, date);
}

