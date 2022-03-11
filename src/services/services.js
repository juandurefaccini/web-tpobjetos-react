import axios from "axios";

const axiosClient = axios.create({
  // baseURL: "http://localhost:3500",
  baseURL: "https://trabajo-objetos.herokuapp.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosClient.defaults.timeout = 10000;

const getUsuarios = async () => await axios.get("/usuarios");

const getElementoByNombre = async (name) => {
  try {
    const res = await axiosClient.get(`/directorio?carpetaBase=${name}`);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export { axiosClient, getUsuarios, getElementoByNombre };
