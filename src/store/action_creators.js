import axios from 'axios';

export let Stations = () => {
    return async (dispatch) => {
        let ret = [];

        let response = await axios.get(`http://localhost:8000/stations`);
        let data = response.data;
        await data.map(async (station) => {
            let {id, name}= station;
            ret.push({id, name});
        });

        return ret;
    };
};

export let validateUser= (_email, _pass) => {
    return async (dispatch) => {
        let ret= -1;
        let response = await axios.get(`http://localhost:8000/users`);
        let data= response.data;
        await data.map(async (user) => {
            let {email, password, id} = user;
            
            if(email=== _email && password=== _pass) {
                ret= id;
            }
        });

        return ret;
    }
}

export let addUser= (email, number, password) => {
    return async(dispatch) => {
        let data= await axios.post('http://localhost:8000/users', {email, number, password});
        if(data.data!== undefined) return data.data.id;
    };
};

export let getUser= (_id) => {
    return async(dispatch) => {
        let ret= undefined;
        let response= await axios.get('http://localhost:8000/users');
        let data= response.data;

        data.map(({id, email, password}) => {
            if(id=== _id) ret= {email, password};
        });

        return ret;
    }
}