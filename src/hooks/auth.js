import useSWR from "swr";
import { apiClient } from "../lib/apiClient";

export const useAuth = ({ middleware, redirectIfAuthenticated } = {}) => {
  const { data: user, error } = useSWR("/users", () =>
    apiClient
      .get("/users")
      .then((res) => res.data)
      .catch((error) => {
        if (error.response.status !== 409) throw error;
      })
  );

  return {
    user,
  };
};
