import axios from 'axios';
import { actions } from './store';

const link= "https://adarsh.techlious.com";
export let Stations = () => {
    return async (dispatch) => {
        let ret = [];

        let response = await axios.get(`${link}/stations`);
        let data = response.data;
        await data.map(async (station) => {
            let { id, name } = station;
            ret.push({ id, name });
        });

        return ret;
    };
};

export let validateUser = (_email, _pass) => {
    return async (dispatch) => {
        let ret = -1;
        console.log(_email, _pass);
        let response = await axios.get(`${link}/users`);
        let data = response.data;
        await data.map(async (user) => {
            let { email, password, id } = user;

            if (email === _email && password === _pass) {
                ret = id;
            }
        });

        if (ret === -1) {
            response = await axios.get(`${link}/admin`);
            let data = response.data;
            let { name, password } = data;

            if (name === _email && password === _pass) {
                ret = 0;
            }
        }

        return ret;
    }
}

export let addUser = (email, number, password) => {
    return async (dispatch) => {
        let data = await axios.post(`${link}/users`, { email, number, password });
        if (data.data !== undefined) return data.data.id;
    };
};

export let getUser = (_id) => {
    return async (dispatch) => {
        let ret = undefined;
        let response = await axios.get(`${link}/users`);
        let data = response.data;

        data.map(({ id, email, password }) => {
            if (id === _id) ret = { email, password };
        });

        return ret;
    }
}

export let getStationImage = (_name) => {
    return async (dispatch) => {
        let ret = undefined;
        let response = await axios.get(`${link}/stations`);
        let data = response.data;

        data.map(({ url, name }) => {
            if (_name === name) ret = url;
        });

        return ret;
    }
}

export let addReservation = (res) => {
    return async (dispatch) => {
        console.log("res", res);
        let response = await axios.post(`${link}/reservations/`, res);
        if (response.status !== 201) console.log(response);
    }
}

export let getReservationById = (id) => {
    return async (dispatch) => {
        let response = await axios.get(`${link}/reservations/`);
        let data = response.data;

        let ret = data.filter(reservation => reservation.userId === id);
        return ret;
    }
}

export let getReservationAll = () => {
    return async (dispatch) => {
        let response = await axios.get(`${link}/reservations/`);
        let data = response.data;
        return data;
    }
}

export let addStation= (name, url)=> {
    return async(dispatch)=> {
        console.log({name, url});
        let response= await axios.post(`${link}/stations/`, {name, url});
        if(response.status!= 201) console.log(response);
    }
}

export let deleteReservation= (id, _dispatch)=> {
    return async(dispatch)=> {
        let response= await axios.delete(`${link}/reservations/${id}`);
        _dispatch(actions.toggleUpdate());
    };
};

// export let deleteUser= () => {
//     return async(dispatch)=> {
//         let repsonse= await axios.delete(`${link}/users/5`);
//     }
// }