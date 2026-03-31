import { apiClient } from "./apiClient";

export const createUser = async (payload) => {
  const { data: apiResponse } = await apiClient.post("/user", payload);

  return apiResponse;
};

export const editUser = async (userId, payload) => {
  const { data: apiResponse } = await apiClient.put(`/user/${userId}`, payload);

  return apiResponse;
};

export const retrieveUser = async (userId) => {
  const { data: apiResponse } = await apiClient.get(`/user/${userId}`);

  return apiResponse;
};

export const retrieveAllUsers = async () => {
  try {
    const { data: apiResponse } = await apiClient.get("/user/all");
    return apiResponse;
  } catch (error) {
    // Some backends respond with 404 + message when there are no users yet.
    // Treat that case as an empty collection so the UI shows the normal empty state.
    const status = error?.response?.status;
    const message = error?.response?.data?.message;
    const looksLikeEmpty =
      status === 404 && typeof message === "string" && /no users/i.test(message);

    if (looksLikeEmpty) return {};

    throw error;
  }
};

export const removeUser = async (userId) => {
  const { data: apiResponse } = await apiClient.delete(`/user/${userId}`);

  return apiResponse;
};
