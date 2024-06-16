import React from 'react'
import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../views/Home";
import Login from '../views/Login'
import Error404 from "../views/404";
import AuthLoader from './auth-loader'
import { lozyLoad } from "./lazy-load";
import Layout from '@/layout';

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    id: 'layout',
    element: <Layout />,
    loader: AuthLoader,
    children: [
        {
            path: '/home',
            element: lozyLoad(React.lazy(() => import("@/views/Home")))
        }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/404" />
  },
  {
    path: '/404',
    element: <Error404 />
  }
];

export default createBrowserRouter(routes);
