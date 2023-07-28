import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './app/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const appRouter  = createBrowserRouter([{}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
    <Provider store={store}>
    <App />
    </Provider>
    
  </React.StrictMode>
);


