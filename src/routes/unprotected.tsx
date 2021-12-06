import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from 'pages/dashboard/index';

// TODO add autorization
const getUnprotectedRoutes = (): JSX.Element[] => [
  <Route key="login" path="/login">
    <Dashboard />
  </Route>,
];

export default getUnprotectedRoutes;
