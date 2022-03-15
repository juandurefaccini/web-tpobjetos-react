import React from "react";
import { useFormik } from "formik";
import { useServices } from "../../../context/servicesContext";
import { useNavigate } from "react-router-dom";

export default function Add() {
  const navigate = useNavigate();
  const { postCatedra } = useServices();

  const catedra = {
    nombre: "",
    web: "",
  };

  const formik = useFormik({
    initialValues: catedra,
    validate: (values) => {
      const errors = {};
      if (!values.nombre) errors.nombre = "Campo requerido";
      if (!values.web) errors.web = "Campo requerido";

      return errors;
    },
    onSubmit: (values) => {
      const catedra = {
        idCatedra: values.nombre,
        url: values.web,
      };
      postCatedra(catedra);
      navigate(-1);
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
        <button
          type="submit"
          className="bg-primary border border-secondary text-white font-bold py-2 px-4 rounded"
        >
          Guardar
        </button>
      </form>
    </div>
  );
}
