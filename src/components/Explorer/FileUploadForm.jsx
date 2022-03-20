import React from "react";
import { useFormik } from "formik";
import { useServices } from "../../context/servicesContext";

export default function FileUploadForm({ path, setShowContent }) {
  const { postArchivo } = useServices();
  const formik = useFormik({
    initialValues: {
      data: "",
      nombre: " ",
      path: path,
      palabrasClave: "",
      catedra: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.nombre) errors.nombre = "El nombre es requerido";
      if (!values.data) errors.data = "El archivo es requerido";
      if (!values.catedra) errors.catedra = "Es necesario agregar una catedra";

      return errors;
    },
    onSubmit: (values) => {
      const requestObject = {
        nombre: values.nombre,
        path: values.path,
        palabrasClave: values.palabrasClave,
        catedra: values.catedra,
      };
      const stringifuedRequest = JSON.stringify(requestObject);
      postArchivo(values.data, stringifuedRequest);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex space-x-4 w-full flex-wrap justify-items-start"
    >
      <label>Archivo</label>
      <input
        name="data"
        type="file"
        className="border rounded"
        onChange={(event) => {
          formik.setFieldValue("data", event.currentTarget.files[0]);
        }}
      />
      <div>
        {formik.errors.data ? (
          <div className="text-[red]">{formik.errors.data}</div>
        ) : (
          <></>
        )}
      </div>
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
      <label>Catedra</label>
      <input
        name="catedra"
        type="text"
        className="border rounded"
        onChange={formik.handleChange}
        value={formik.values.catedra}
      />
      <div>
        {formik.errors.catedra ? (
          <div className="text-[red]">{formik.errors.catedra}</div>
        ) : (
          <></>
        )}
      </div>
      <label>Palabras clave (p1,p2,p3,...)</label>
      <input
        name="palabrasClave"
        type="text"
        className="border rounded"
        onChange={(event) =>
          formik.setFieldValue("palabrasClave", event.target.value.split(","))
        }
        value={formik.values.palabrasClave}
      />
      <div>
        {formik.errors.palabrasClave ? (
          <div className="text-[red]">{formik.errors.palabrasClave}</div>
        ) : (
          <></>
        )}
      </div>

      <button
        type="submit"
        className="border rounded bg-secondary text-primary px-4"
      >
        Subir archivo
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
