import React from 'react';
//supporting libraries
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppStore from '../common/store';
import RootRouter from '../common/route';


const App = () => {
    return <Provider store={AppStore} >
                <Router  baseUrl={'/'}>
                    <RootRouter />
                </Router>
    </Provider>
}

export default App;