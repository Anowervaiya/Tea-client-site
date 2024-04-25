import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Layout/Root';
import Home from './Pages/Home';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignUp/SignIn';
import AddTea from './components/SignUp/AddTea';
import UpdateTea from './components/SignUp/UpdateTea';
import AuthProvider from './AuthProvider/AuthProvider';
import {

  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';


const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/SignUP',
        element:<SignUp></SignUp>
      },
      {
        path: '/SignIn',
        element:<SignIn></SignIn>
      },
      {
        path: '/AddTea',
        element:<AddTea></AddTea>
      },
      {
        path: 'Update',
        element:<UpdateTea></UpdateTea>
      }
    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
