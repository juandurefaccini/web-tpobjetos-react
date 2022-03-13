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

  const username = user ? user.email : "";
  const password = user ? user.uid : "";
  const displayName = user ? user.displayName : "";

  //
  // Usuario
  //

  const getUsuarios = async () => {
    try {
      const res = await axios.get("/usuarios");
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const getUsuario = async (email) => {
    try {
      const res = await axios.get("/usuarios", {
        params: {
          idUsuario: email,
        },
      });
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  // TODO : REVISAR
  const postUsuario = async () => {
    try {
      const res = await axiosClient.post(
        "/usuarios",
        {
          nombre: username,
          puntaje: 0,
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
      const res = await axios.get("/usuarios/top");
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  //
  // DIRECTORIO
  //

  const getDirectorio = async (name) => {
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

  const getComentario = async (elementName) => {
    try {
      const res = await axiosClient.get("/comentario", {
        params: {
          idElemento: elementName,
        },
      });
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const postComentario = async (
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
      const res = await axiosClient.delete(
        "/comentario",
        {
          idComentario: idComentario,
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

  //
  // CATEDRA
  //

  const getCatedras = async () => {
    try {
      const res = await axios.get("/catedra");
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const getCatedra = async (idCatedra) => {
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

  const postCatedra = async (idCatedra, url) => {
    try {
      const res = await axios.post(
        "/catedra",
        {
          idCatedra: idCatedra,
          url: url,
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

  const putCatedra = async (idCatedra, url) => {
    try {
      const res = await axios.put(
        "/catedra",
        {
          idCatedra: idCatedra,
          url: url,
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
    try {
      const res = await axios.delete("/catedra", {
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
  const postCarpeta = async (
    nombre,
    tipo,
    fechaModificacion,
    fechaCreacion,
    catedra,
    padre
  ) => {
    try {
      const res = await axios.post(
        "/carpeta",
        {
          nombre: nombre,
          tipo: tipo,
          fechaModificacion: fechaModificacion,
          fechaCreacion: fechaCreacion,
          catedra: catedra,
          padre: padre,
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
      const res = await axios.delete(
        "/carpeta",
        {
          params: {
            nombre: nombre,
          },
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

  //
  // FILTRO
  //

  const getArchivoFiltro = async (criteriaParam, carpetaBase) => {
    try {
      const res = await axiosClient.get("/filtro", {
        params: { carpetaBase: carpetaBase, criterios: criteriaParam },
      });
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  //
  // ARCHIVO
  //

  // TODO : REVISAR
  const postArchivo = async (
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
      const res = await axios.post(
        "/archivo",
        {
          nombre: nombre,
          tipo: tipo,
          fechaModificacion: fechaModificacion,
          fechaCreacion: fechaCreacion,
          tamanio: tamanio,
          catedra: catedra,
          padre: padre,
          idUsuario: idUsuario,
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
  const deleteArchivo = async (nombre) => {
    try {
      const res = await axios.delete(
        "/archivo",
        {
          params: {
            nombre: nombre,
          },
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

  return (
    <ServicesContext.Provider
      value={{
        getUsuarios,
        getUsuario,
        getUsuariosTop10,
        postUsuario,
        deleteUsuario,
        getDirectorio,
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
