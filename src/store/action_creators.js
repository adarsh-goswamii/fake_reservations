import axios from 'axios';

export let Stations = () => {
    return async (dispatch) => {
        let ret = [];

        let data = await fetch(`http://localhost:8000/stations`);
        data = await data.json();
        await data.map(async (station) => {
            let {id, name}= station;
            ret.push({id, name});
        });

        return ret;
    };
};

export let validateUser= (_email, _pass) => {
    return async (dispatch) => {
        let ret= false;
        let data = await fetch(`http://localhost:8000/users`);
        data = await data.json();
        await data.map(async (user) => {
            let {email, password} = user;
            
            if(email=== _email && password=== _pass) {
                console.log(email, _email);
                console.log(password, _pass);
                ret= true;
            }
        });

        return ret;
    }
}

export let addUser= (email, number, password) => {
    return async(dispatch) => {
        console.log(JSON.stringify({email, number, password}));
        await axios.post('http://localhost:8000/users', {email, number, password});
    };
};