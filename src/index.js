import React from 'react';
import { render } from 'react-dom';
// import {app} from './js/app'
// import App from './js/App';
// import './css/app.scss';
// import './css/tailwind.css';
// import { Provider } from 'overmind-react';

// import 'react-toastify/dist/ReactToastify.css';
console.log("IN")
const renderApp = () => render(
    // <Provider value={app}>
    <h1>This is from REACT</h1>
    // </Provider>


    , document.getElementById('root'));
renderApp()
// if (module.hot) {
//     module.hot.accept(['./js/app', './js/App'], () => {
//         renderApp();
//     });

// }