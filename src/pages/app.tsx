import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from 'routes';

// Root component
const App: FC = () => {

  // TODO add user veriication
  return (
    <Router>
        <MainRouter  isSignedIn />
    </Router>
  );
};
export default App;
