import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './pages/App';

const Index = () => {

    return (
        <Provider store={store}>
            <App/>
        </Provider>
    );
};

ReactDOM.render(<Index />, document.getElementById('root'));
