import React from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

function App() {
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

export default App;
