import axios from "axios";

export const listUser = async () => {
  const data = await axios.get("http://localhost:9000/users/list");
  return data;
};

export const createUser = async (newuser: any) => {
  const data = await axios.post("http://localhost:9000/users/create", newuser);
  return data;
};

export const deleteUser = async (id: number) => {
  const data = await axios.delete(`http://localhost:9000/users/delete/${id}`);
  return data;
};

export const updateUser = async (id: number, user: any) => {
  const data = await axios.put(`http://localhost:9000/users/update/${id}`, {
    name: user.name,
    email: user.email,
    phone: user.phone,
    profile_image: user.profile_image,
    status: user.status,
  });

  return data;
};
