import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:3500",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const getUsuarios = async () => await axios.get("/usuarios");

export { axiosClient, getUsuarios };
