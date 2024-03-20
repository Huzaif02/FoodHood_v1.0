import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
// import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <Auth0Provider
      domain="dev-582te4uzg1vngzw7.us.auth0.com"
      clientId="h5max4Vz9ts9LJXhqeru3ICniBErrY73"
      redirect_uri={window.location.origin}> */}
      <App />
    {/* </Auth0Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
