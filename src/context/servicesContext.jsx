/* eslint-disable react-hooks/rules-of-hooks */
import React, { createContext, useContext } from "react";
import { useAuth } from "./authContext";
import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://trabajo-objetos.herokuapp.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosClient.defaults.timeout = 10000;

export const ServicesContext = createContext({});

export function ServicesProvider({ children }) {
  const { user } = useAuth();

  const username = user ? user.email : null;
  const password = user ? user.uid : null;
  const displayName = user ? user.displayName : null;

  //
  // Usuario
  //

  const getUsuarios = async () => {
    try {
      const res = await axiosClient.get("/usuarios");
      console.log("res : ", res);
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const getUsuario = async (email) => {
    try {
      const res = await axiosClient.get("/usuarios", {
        params: {
          idUsuario: email,
        },
      });
      console.log("usuario api", res.data);
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  // TODO : REVISAR
  const postUsuario = async () => {
    console.log("postUsuario : ", displayName, username, password);
    try {
      const res = await axiosClient.post("/usuarios", {
        data: {
          nombre: displayName,
          puntaje: 0,
        },
        auth: {
          username: username,
          password: password,
        },
      });
      console.log("res :", res);
      return res.data;
    } catch (error) {
      console.log("error ", error);
      console.log(error.message);
    }
  };

  // TODO : REVISAR
  const deleteUsuario = async () => {
    try {
      const res = await axiosClient.delete("/usuarios", {
        auth: {
          username: username,
          password: password,
        },
      });
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const getUsuariosTop10 = async () => {
    try {
      const res = await axiosClient.get("/usuarios/top");
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  //
  // DIRECTORIO
  //

  const getDirectorioBase = async () => {
    const name = ":root";
    try {
      const res = await axiosClient.get(`/directorio?pathCarpetaBase=${name}`);
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const getDirectorio = async (name) => {
    try {
      const res = await axiosClient.get(`/directorio?pathCarpetaBase=${name}`);
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  //
  // COMENTARIO
  //

  const getComentario = async (element) => {
    const pathElemento = element.path + ":" + element.nombre;
    try {
      const res = await axiosClient.get("/comentario", {
        params: {
          pathElemento: pathElemento,
        },
      });
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const postComentario = async (elementPath, contenido) => {
    try {
      const res = await axiosClient.post(
        "/comentario",
        {
          pathElemento: elementPath,
          contenido: contenido,
        },
        {
          auth: {
            username: username,
            password: password,
          },
        }
      );
      console.log(res);
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const putComentario = async (idElemento, idComentario, contenido) => {
    try {
      const res = await axiosClient.put(
        "/comentario",
        {
          idElemento: idElemento,
          idComentario: idComentario,
          contenido: contenido,
        },
        {
          auth: {
            username: username,
            password: password,
          },
        }
      );
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteComentario = async (idComentario) => {
    try {
      const res = await axiosClient.delete("/comentario", {
        params: {
          idComentario: idComentario,
        },
        auth: {
          username: username,
          password: password,
        },
      });
      console.log(res);
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  //
  // CATEDRA
  //
  const getCatedras = async () => {
    try {
      const res = await axiosClient.get("/catedra");
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const getCatedra = async (idCatedra) => {
    try {
      const res = await axiosClient.get("/catedra", {
        params: {
          idCatedra: idCatedra,
        },
      });
      return res.data[0];
    } catch (error) {
      console.log(error.message);
    }
  };

  const postCatedra = async (catedra) => {
    try {
      const res = await axiosClient.post(
        "/catedra",
        {
          idCatedra: catedra.idCatedra,
          url: catedra.url,
        },
        {
          auth: {
            username: username,
            password: password,
          },
        }
      );
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const putCatedra = async (catedra) => {
    try {
      const res = await axiosClient.put(
        "/catedra",
        {
          idCatedra: catedra.idCatedra,
          url: catedra.url,
        },
        {
          auth: {
            username: username,
            password: password,
          },
        }
      );
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  // TODO : REVISAR
  const deleteCatedra = async (idCatedra) => {
    console.log("deleteCatedra :", idCatedra);
    try {
      const res = await axiosClient.delete("/catedra", {
        params: {
          idCatedra: idCatedra,
        },
        auth: {
          username: username,
          password: password,
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

  // TODO : REVISAR
  const postCarpeta = async (carpeta) => {
    try {
      const res = await axiosClient.post(
        "/carpeta",
        {
          nombre: carpeta.nombre,
          path: carpeta.path,
          descripcion: carpeta.descripcion,
        },
        {
          auth: {
            username: username,
            password: password,
          },
        }
      );
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  // TODO : REVISAR
  const deleteCarpeta = async (nombre) => {
    try {
      const res = await axiosClient.delete("/carpeta", {
        params: {
          pathCarpeta: nombre,
        },
        auth: {
          username: username,
          password: password,
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

  const getArchivoFiltro = async (criteriaParam, carpetaBase) => {
    try {
      const res = await axiosClient.get("/filtro", {
        params: { pathCarpetaBase: carpetaBase, criterios: criteriaParam },
      });
      console.log(res);
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  //
  // ARCHIVO
  //

  // TODO : REVISAR
  const postArchivo = async (file, request) => {
    const formData = new FormData();
    formData.append("data", file); // Guardo el archivo en el campo data del form
    formData.append("request", request);
    try {
      const res = await axiosClient.post("/archivo", formData, {
        auth: {
          username: username,
          password: password,
        },
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("res : ", res);
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  // TODO : REVISAR
  const deleteArchivo = async (nombre) => {
    try {
      const res = await axiosClient.delete("/archivo", {
        params: {
          pathArchivo: nombre,
        },
        auth: {
          username: username,
          password: password,
        },
      });
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const descargarArchivo = async (path) => {
    console.log(path);
    try {
      const res = await axiosClient.get("/archivo/fuente", {
        params: {
          path: path,
        },
        auth: {
          username: username,
          password: password,
        },
      });
      console.log(res);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ServicesContext.Provider
      value={{
        getUsuarios,
        getUsuario,
        getUsuariosTop10,
        postUsuario,
        deleteUsuario,
        getDirectorio,
        getDirectorioBase,
        getComentario,
        postComentario,
        putComentario,
        deleteComentario,
        getCatedras,
        getCatedra,
        postCatedra,
        putCatedra,
        deleteCatedra,
        postCarpeta,
        deleteCarpeta,
        getArchivoFiltro,
        postArchivo,
        descargarArchivo,
        deleteArchivo,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
}

export const useServices = () => {
  const context = useContext(ServicesContext);
  if (!context)
    throw new Error(
      "useServices must be used within a ServicesContext.Provider"
    );
  return context;
};
