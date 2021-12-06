import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from 'pages/dashboard/index';

const getProtectedRoutes = (): JSX.Element[] => {
  let routes: any = [];
    routes = [
      <Route key="dashboard" path="/dashboard">
        <Dashboard />
      </Route>,
    ];
  return routes;
};

export default getProtectedRoutes;
