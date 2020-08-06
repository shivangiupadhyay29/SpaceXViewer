const express = require('express');
const app = express();

import renderStaticApp from './staticApp';
import AppStore from './store';


app.use(express.static('public')); //bundle.js file is 
// looked into this folder exposed by the server to webpack
//to be sent to the browser. 

app.get('*', (req, res) => {
    console.log('AppStore',AppStore);
    res.send(renderStaticApp(req, AppStore));
});

app.listen(3030, () => console.log('server is listening on 3030..'));