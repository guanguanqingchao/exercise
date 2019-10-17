
import React from 'react';
import { render } from 'react-dom';
import { withRouter } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import App from './app.jsx';
import { Provider } from 'react-redux';




import store from "store/index";
import { addArticle } from "actions";

console.log('store', store)

window.store = store;
window.addArticle = addArticle;
console.log('----------', store.getState())
store.subscribe(() => console.log('..............redux! dispath an action!!!.........'))
store.dispatch(addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }))
store.dispatch(addArticle({ title: 'this is another action', id: 2 }))
console.log('----------', store.getState())



if (!PRODUCTION) {
    console.log('Debug info');
}

if (PRODUCTION) {
    console.log('Production log');
}

if (process.env.NODE_ENV === 'production') {
    console.log('Looks like we are in production mode!');
}



render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,

    document.getElementById('root')

)






