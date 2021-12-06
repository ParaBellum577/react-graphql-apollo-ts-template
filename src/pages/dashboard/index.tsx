import React from "react";
import { loader } from "graphql.macro";
const query = loader("./test.graphql");
import { useQuery } from "@apollo/client";
// import styles from './index.module.scss';

const Dashboard: React.FC = () => {
  const { loading, error, data } = useQuery(query, {
    variables: { currency: "USD" },
  });
  console.log("🚀 ~ test graphQl", data, error, loading);
  return <div>{loading ? <span>Loading...</span> : <span>It worked!</span>}</div>;
};

export default Dashboard;
