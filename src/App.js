import React from "react";
import Userlist from "./UserList";
import { useAuth } from "./hooks/auth";
import { SWRConfig } from "swr";
import { apiClient } from "./lib/apiClient";

const fetcher = (url) => apiClient(url).then((res) => res.data);

function App() {
  const { user } = useAuth({ middleware: "auth" });
  console.log(user);

  return (
    <SWRConfig value={{ fetcher }}>
      <Userlist />
      <p>{user}</p>
    </SWRConfig>
  );
}

export default App;
