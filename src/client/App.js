import React from 'react';
//supporting libraries
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppStore from './store';
import RootRouter from './route';


const App = () => {
    return <Router  baseUrl={'/'}>
                    <Provider store={AppStore} >
                           <RootRouter />
                    </Provider>
            </Router>
}

export default App;