import React from 'react';
import {useSelector} from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './login';
import Register from './register';
import '../CSS/index.css';
import PlanJourney from './PlanJourney';
import Dashboard from './Dashboard';

const App= ()=> {
    let {loggedin, admin}= useSelector(state => state.state);

    return (
        <BrowserRouter>
                <Switch>
                    <Route path='/login'>
                        <Login></Login>
                    </Route>
                    <Route path="/register">
                        <Register></Register>
                    </Route>
                    <Route path="/plan-journey">
                        {loggedin ? (admin? <Redirect to='/dashboard' />: <PlanJourney />) : <Redirect to='/login' />}
                    </Route>
                    <Route path="/dashboard">
                        {loggedin ? <Dashboard /> : <Redirect to='/login' />}
                    </Route>
                    <Route path='/'>
                        <Redirect to='/login' />
                    </Route>
                </Switch>
            </BrowserRouter>
    );
};

export default App;