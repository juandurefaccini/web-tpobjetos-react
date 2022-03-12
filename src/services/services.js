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

//
// Usuario
//

export const getUsuarios = async () => {
  try {
    const res = await axios.get("/usuarios");
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getUsuarioById = async (email) => {
  try {
    const res = await axios.get("/usuarios", {
      params: {
        id: email,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const postUser = async (user) => {
  const { providerData, displayName } = user;
  const email = providerData[0].email;
  try {
    const res = await axiosClient.post("/usuarios", {
      idUsuario: email,
      nombre: displayName,
      puntaje: 0,
    });
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUser = async () => {
  try {
    const res = await axiosClient.delete("/usuarios");
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getUserByTop10 = async () => {
  try {
    const res = await axios.get("/usuarios/top");
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

//
// DIRECTORIO
//

export const getDirectorioByNombre = async (name) => {
  try {
    const res = await axiosClient.get(`/directorio?carpetaBase=${name}`);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

//
// COMENTARIO
//

export const getComentariosByElemento = async (elementName) => {
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

export const postComentario = async (
  idElemento,
  idComentario,
  contenido,
  idUsuario
) => {
  try {
    const res = await axiosClient.post("/comentario", {
      idElemento: idElemento,
      idComentario: idComentario,
      contenido: contenido,
      idUsuario: idUsuario,
    });
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const putComentario = async (idElemento, idComentario, contenido) => {
  try {
    const res = await axiosClient.put("/comentario", {
      idElemento: idElemento,
      idComentario: idComentario,
      contenido: contenido,
    });
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteComentario = async (idComentario) => {
  try {
    const res = await axiosClient.delete("/comentario", {
      idComentario: idComentario,
    });
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

//
// CATEDRA
//

export const getCatedras = async () => {
  try {
    const res = await axios.get("/catedra");
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getCatedra = async (idCatedra) => {
  try {
    const res = await axios.get("/catedra", {
      params: {
        idCatedra: idCatedra,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const postCatedra = async (idCatedra, url) => {
  try {
    const res = await axios.post("/catedra", {
      idCatedra: idCatedra,
      url: url,
    });
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const putCatedra = async (idCatedra, url) => {
  try {
    const res = await axios.put("/catedra", {
      idCatedra: idCatedra,
      url: url,
    });
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteCatedra = async (idCatedra) => {
  try {
    const res = await axios.delete("/catedra", {
      params: {
        idCatedra: idCatedra,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

//
// CARPETA
//

export const postCarpeta = async (
  nombre,
  tipo,
  fechaModificacion,
  fechaCreacion,
  catedra,
  padre
) => {
  try {
    const res = await axios.post("/carpeta", {
      nombre: nombre,
      tipo: tipo,
      fechaModificacion: fechaModificacion,
      fechaCreacion: fechaCreacion,
      catedra: catedra,
      padre: padre,
    });
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteCarpeta = async (nombre) => {
  try {
    const res = await axios.delete("/carpeta", {
      params: {
        nombre: nombre,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

//
// FILTRO
//

export const getElementoByFilter = async (criteriaParam, carpetaBase) => {
  try {
    const res = await axiosClient.get("/filtro", {
      params: { carpetaBase: carpetaBase, criterios: criteriaParam },
    }); // TODO : Cambiar por el nombre de la url
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

//
// ARCHIVO
//

export const postArchivo = async (
  nombre,
  tipo,
  tamanio,
  fechaModificacion,
  fechaCreacion,
  catedra,
  padre,
  idUsuario
) => {
  try {
    const res = await axios.post("/archivo", {
      nombre: nombre,
      tipo: tipo,
      fechaModificacion: fechaModificacion,
      fechaCreacion: fechaCreacion,
      tamanio: tamanio,
      catedra: catedra,
      padre: padre,
      idUsuario: idUsuario, // TODO : Hace falta pasarlo?
    });
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteArchivo = async (nombre) => {
  try {
    const res = await axios.delete("/archivo", {
      params: {
        nombre: nombre,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};
