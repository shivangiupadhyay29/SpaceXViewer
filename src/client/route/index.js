import React from 'react';
import { Route } from 'react-router-dom';
import App  from '../App';

export default () => {
    return <div>
        <Route path="/" element={<App />} />
    </div>
}