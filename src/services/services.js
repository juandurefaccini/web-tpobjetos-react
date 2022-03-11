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

const getElementoByFilter = async (criteriaParam, carpetaBase) => {
  try {
    const res = await axiosClient.get("/filtro", {
      params: { carpetaBase: carpetaBase, criterios: criteriaParam },
    }); // TODO : Cambiar por el nombre de la url
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

const postUser = async (user) => {
  const { providerData, displayName } = user;
  const email = providerData[0].email;
  try {
    const res = await axiosClient.post("/usuarios", {
      idUsuario: email,
      nombre: displayName,
      puntaje: 0,
    }); // TODO : Cambiar por el nombre de la url
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

const getCommentsByElement = async (elementName) => {
  try {
    const res = await axiosClient.get("/comentario", {
      params: {
        idElemento: elementName,
      },
    }); // TODO : Cambiar por el nombre de la url
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export {
  axiosClient,
  getUsuarios,
  getElementoByNombre,
  postUser,
  getElementoByFilter,
  getCommentsByElement,
};
