import api from "./api";

export const singUp = async (email, avatar, name, password) => {
  const response = await api.post("user/create", {
    email,
    avatar,
    name,
    password,
  });

  return response.data;
};

// export const singIn = async (email, password) => {};
