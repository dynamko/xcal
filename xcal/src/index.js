import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CalorieCounter from './Components/CalorieCounter/CalorieCounter';
import About from './Components/About/About';
import Error from './Components/Error/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error/>,
    children: [
      {
        path: 'counter',
        element: <CalorieCounter/>
      },
      {
        path: 'about',
        element: <About/>
      }
  ],

  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

