import React from "react";
import useSWR from "swr";
import { apiClient } from "./lib/apiClient";

const fetcher = (url) => apiClient(url).then((res) => res.data);

function Userlist() {
  const { data, error } = useSWR("http://localhost:3006/users", fetcher);
  if (error) return <h1>{error}</h1>;

  return (
    <div className="App">
      {data ? (
        data.map((user) => {
          return <h1>{user}</h1>;
        })
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}

export default Userlist;
