//react app dependencies
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter  } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from '../client/route';

export  default  (req, store) => {
    const content = renderToString(
        <StaticRouter  location={req.path} context={{}}>
            <Provider  store={store}>
                <Routes />
            </Provider>
        </StaticRouter>
    );
    return   `
    <html>
    <head></head>
    <body>
        <div id='root'>${content}</div>
        <script src="bundle.js"></script>
    </body>
    </html>
    `
}