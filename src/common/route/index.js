import React from 'react';
import { Route } from 'react-router-dom';
import {  Home }  from '../containers';

export default () => {
    return <div>
        <Route path="/" element={<Home />} />
    </div>
}