//react app dependencies
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter  } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import Routes from '../common/route';

export  default  (req, store) => {
    const content = renderToString(
    <Provider  store={store}>
            <StaticRouter  location={req.path} context={{}}>
                  <Routes />
            </StaticRouter>
    </Provider>
    );
    return   `
    <html>
    <head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    </head>
    <body>
        <div id='root'>${content}</div>
        <script src="bundle.js"></script>
    </body>
    </html>
    `
}