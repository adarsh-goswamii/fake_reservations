import { addReservation, addUser, getUserId, validateUser } from "./action_creators";
import { actions } from './store';

export const checkEmail = (email) => {
    let regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regexp.test(String(email).toLowerCase());
}

export const RegisterValid = (email, number, password, confirmPassword, history, _dispatch) => {
    return async (dispatch) => {
        let valid = checkEmail(email);
        if (!valid) { alert("Enter a valid email"); return; }
        valid &= String(number).length == 10;
        if (!valid) { alert("Enter a valid number"); return; }
        valid &= (String(password).length > 6);
        if (!valid) { alert("Password too short"); return; }
        valid &= (password === confirmPassword);
        if (!valid) { alert("Password don't match, try again"); return; }

        let id = await addUser(email, number, password)();
        await _dispatch(actions.toggleLoggedin());
        await _dispatch(actions.setUserId(id));
        history.replace('/plan-journey');
        console.log('logged in', id);

        return;
    }
}

export let LoginValid = (email, password, _dispatch, history) => {
    return async (dispatch) => {
        let valid = checkEmail(email);
        if (!valid) { alert("Enter a valid email"); return; }
        valid &= password !== undefined;
        valid &= String(password).length > 6;
        if (!valid) { alert("Password too short"); return; }

        let id = await validateUser(email, password)();
        if (id === -1) alert("No user found with given credentials");
        else {
            await _dispatch(actions.toggleLoggedin());
            await _dispatch(actions.setUserId(id));
            if(id== 0) _dispatch(actions.toggleAdmin());
            history.replace('/plan-journey');
            console.log('logged in', id);
        }

        return;
    };
};

export const logout = (dispatch, admin) => {
    dispatch(actions.toggleLoggedin());
    if(admin) dispatch(actions.toggleAdmin());
    dispatch(actions.setUserId(-1));
    console.log('loggedout');
}

export const bookReservation = (src, dst, date, id) => {
    return async (dispatch) => {
        let reservation= {src, dst, date, "userId": id};
        await addReservation(reservation)();
        alert("Reservation added successfully.")
        console.log('Reservation complete', src, dst, date, id);
    }
}

