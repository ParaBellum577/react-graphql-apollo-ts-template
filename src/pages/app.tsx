import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from 'routes';
// import _ from 'lodash';

// Root component
import { gql, useQuery } from "@apollo/client";
const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;
const App: FC = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  console.log('🚀 ~ App ~ data', data);
  return (
    <Router>
        <MainRouter  isSignedIn />
    </Router>
  );
};
export default App;
