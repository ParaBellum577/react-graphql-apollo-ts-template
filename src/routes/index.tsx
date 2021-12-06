import React, { useMemo } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import getProtectedRoutes from 'routes/protected';
import getUnprotectedRoutes from 'routes/unprotected';

interface RouterProps {
  isSignedIn: boolean;
}

const MainRouter: React.FC<RouterProps> = ({isSignedIn}) => {

  const rootRedirect = useMemo(() => {
    if (isSignedIn) {
      return '/start'
    }
    return '/login'
  }, [isSignedIn]);

  return (
    <>
      <Switch>
        {isSignedIn ? getProtectedRoutes() : getUnprotectedRoutes()}
        <Redirect to={rootRedirect} />
      </Switch>
    </>
  );
};

export default MainRouter;
