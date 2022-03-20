import React from "react";
import { useFormik } from "formik";
import { useServices } from "../../context/servicesContext";

export default function FolderCreationForm({ path, setShowContent }) {
  const { postCarpeta } = useServices();

  const formik = useFormik({
    initialValues: {
      nombre: "",
      path: path,
      descripcion: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.nombre)
        errors.nombre = "La carpeta requiere un nombre para ser creada";

      return errors;
    },
    onSubmit: (values) => {
      postCarpeta(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex space-x-4">
      <label>Nombre</label>
      <input
        name="nombre"
        type="text"
        className="border rounded"
        onChange={formik.handleChange}
        value={formik.values.nombre}
      />
      <div>
        {formik.errors.nombre ? (
          <div className="text-[red]">{formik.errors.nombre}</div>
        ) : (
          <></>
        )}
      </div>
      <label>Descripcion</label>
      <input
        name="descripcion"
        type="text"
        className="border rounded"
        onChange={formik.handleChange}
        value={formik.values.descripcion}
      />
      <button
        type="submit"
        className="border rounded bg-secondary text-primary px-4"
      >
        Crear Carpeta
      </button>
      <button
        onClick={() => {
          setShowContent(null);
        }}
        className="border rounded bg-secondary text-primary px-4"
      >
        Cancelar
      </button>
    </form>
  );
}
