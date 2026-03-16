import axios from "axios";

export const postLogin = async (data: any) => {
  const res = await axios.post("http://localhost:8080/login", {
    name: "admin",
    password: 1234,
  });
  return res;
};
