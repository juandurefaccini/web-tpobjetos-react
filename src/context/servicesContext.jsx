/* eslint-disable react-hooks/rules-of-hooks */
import React, { createContext, useContext, useRef } from "react";
import axios from "axios";

const url = "https://trabajo-objetos.herokuapp.com";

const axiosClient = axios.create({
  baseURL: url,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosClient.defaults.timeout = 8000; // TODO : REVISAR

export const ServicesContext = createContext({});

export function ServicesProvider({ children }) {
  function getAuth(user) {
    return { username: user.email, password: user.uid };
  }

  //
  // Usuario
  //

  const getUsuarios = async () => {
    try {
      const res = await axiosClient.get("/usuarios");
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
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const postUsuario = async (user) => {
    console.log("postUsuario invocado con user : ", user);

    try {
      const res = await axiosClient.post(
        "/usuarios",
        {
          nombre: user.displayName,
        },
        { auth: { username: user.email, password: user.uid } }
      );
      console.log("res post usuario :", res);
      return res.data;
    } catch (error) {
      // IF ERROR IS NOT 422
      if (error.response.status !== 422) {
        console.log(error.message);
      }
    }
  };

  const deleteUsuario = async (user) => {
    try {
      const res = await axiosClient.delete("/usuarios", {
        auth: { username: user.email, password: user.uid },
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

  const postComentario = async (elementPath, contenido, user) => {
    try {
      const res = await axiosClient.post(
        "/comentario",
        {
          pathElemento: elementPath,
          contenido: contenido,
        },
        {
          auth: getAuth(user),
        }
      );
      console.log(res);
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const putComentario = async (idElemento, idComentario, contenido, user) => {
    try {
      const res = await axiosClient.put(
        "/comentario",
        {
          idElemento: idElemento,
          idComentario: idComentario,
          contenido: contenido,
        },
        {
          auth: getAuth(user),
        }
      );
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteComentario = async (idComentario, user) => {
    try {
      const res = await axiosClient.delete("/comentario", {
        params: {
          idComentario: idComentario,
        },
        auth: getAuth(user),
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

  const postCatedra = async (catedra, user) => {
    try {
      const res = await axiosClient.post(
        "/catedra",
        {
          idCatedra: catedra.idCatedra,
          url: catedra.url,
        },
        {
          auth: getAuth(user),
        }
      );
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const putCatedra = async (catedra, user) => {
    console.log(catedra, user);
    try {
      const res = await axiosClient.put(
        "/catedra",
        {
          idCatedra: catedra.idCatedra,
          url: catedra.url,
        },
        {
          auth: getAuth(user),
        }
      );
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteCatedra = async (idCatedra, user) => {
    console.log("deleteCatedra :", idCatedra);
    try {
      const res = await axiosClient.delete("/catedra", {
        params: {
          idCatedra: idCatedra,
        },
        auth: getAuth(user),
      });
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  //
  // CARPETA
  //

  const postCarpeta = async (carpeta, user) => {
    try {
      const res = await axiosClient.post(
        "/carpeta",
        {
          nombre: carpeta.nombre,
          path: carpeta.path,
          descripcion: carpeta.descripcion,
        },
        {
          auth: getAuth(user),
        }
      );
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteCarpeta = async (nombre, user) => {
    try {
      const res = await axiosClient.delete("/carpeta", {
        params: {
          pathCarpeta: nombre,
        },
        auth: getAuth(user),
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
    console.log("getArchivoFiltro :", criteriaParam);
    try {
      const res = await axiosClient.get("/filtro", {
        params: { pathCarpetaBase: carpetaBase, criterios: criteriaParam },
      });
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  //
  // ARCHIVO
  //

  const postArchivo = async (file, request, user) => {
    const formData = new FormData();
    formData.append("data", file); // Guardo el archivo en el campo data del form
    formData.append("request", request);
    try {
      const res = await axiosClient.post("/archivo", formData, {
        auth: getAuth(user),
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteArchivo = async (nombre, user) => {
    console.log("deleteArchivo :", nombre, user);
    try {
      const res = await axiosClient.delete("/archivo", {
        params: {
          pathArchivo: nombre,
        },
        auth: getAuth(user),
      });
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const descargarArchivo = async (path, user) => {
    try {
      const res = await axiosClient.get("/archivo/fuente", {
        params: {
          path: path,
        },
        auth: getAuth(user),
        responseType: "blob",
      });

      // I WANT TO DOWNLOAD A FILE FROM AXIOS RESPONSE

      const url = window.URL.createObjectURL(
        new Blob([res.data], { type: res.data.type })
      );
      const link = document.createElement("a");
      link.href = url;
      console.log(res.data);
      link.setAttribute("download", url);
      document.body.appendChild(link);
      link.click();

      /* 
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", url);
      document.body.appendChild(link);
      link.click();
      window.URL.revokeObjectURL(url);
      link.remove();
      console.log("pt");
 */
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
