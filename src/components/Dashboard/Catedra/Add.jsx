import React from "react";
import { useFormik } from "formik";
import { useServices } from "../../../context/servicesContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/authContext";
import Alert from "../../Alert";

export default function Add() {
  const { user } = useAuth(); // Obtenemos el usuario actual
  const navigate = useNavigate(); // Obtenemos el navigate para redireccionar
  const { postCatedra } = useServices(); // Obtenemos el servicio de postCatedra
  const [error, setError] = React.useState(false); // Estado de error

  const formik = useFormik({
    // Utilizamos el hook de formik
    initialValues: {
      // Valores iniciales
      nombre: "",
      web: "",
    },
    validate: (values) => {
      // Validaciones el nombre y la web son obligatorias
      const errors = {};
      if (!values.nombre) errors.nombre = "Campo requerido";
      if (!values.web) errors.web = "Campo requerido";

      return errors;
    },
    onSubmit: (values) => {
      // Instancio la catedra con los valores del formulario
      const catedra = {
        idCatedra: values.nombre,
        url: values.web,
      };
      postCatedra(catedra, user)
        .then(() => navigate(-1)) // Redireccionamos a la pagina anterior
        .catch((error) => {
          setError(error.message); // Guardamos el error
        });
    },
  });

  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col space-y-4 border p-4 rounded"
      >
        <label>Nombre</label>
        <input
          className="border border-gray-600 rounded"
          name="nombre"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.nombre}
        />
        {formik.errors.nombre ? <div>{formik.errors.nombre}</div> : <></>}
        <label>Sitio web</label>
        <input
          className="border border-gray-600 rounded"
          name="web"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.web}
        />
        {formik.errors.web ? <div>{formik.errors.web}</div> : <></>}
        <div className="flex w-full justify-around">
          <button
            type="submit"
            className="bg-primary border border-secondary text-white font-bold py-2 px-16 rounded"
          >
            Guardar
          </button>
          <button
            onClick={() => {
              navigate(-1); // Redireccionamos a la pagina anterior
            }}
            className="bg-primary border border-secondary text-white font-bold py-2 px-16 rounded"
          >
            Cancelar
          </button>
        </div>
        <Alert className="w-full" message={error} /> {/* Mostramos el error */}
      </form>
    </div>
  );
}
