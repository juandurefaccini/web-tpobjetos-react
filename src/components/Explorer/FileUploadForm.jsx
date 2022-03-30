import React from "react";
import { useFormik } from "formik";
import { useServices } from "../../context/servicesContext";
import { useAuth } from "../../context/authContext";
import Alert from "../Alert";

export default function FileUploadForm({ path, setShowContent }) {
  const { user } = useAuth();
  const { postArchivo } = useServices();
  const [error, setError] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      data: "",
      nombre: "",
      path: path,
      palabrasClave: "",
      catedra: "",
    },
    validate: (values) => {
      const errors = {};

      console.log("values", values);

      if (!values.nombre) errors.nombre = "El nombre es requerido";
      if (!values.data) errors.data = "El archivo es requerido";
      if (!values.catedra) errors.catedra = "Es necesario agregar una catedra";

      return errors;
    },
    onSubmit: (values) => {
      const requestObject = {
        nombre: values.nombre.trim(),
        path: values.path.trim(),
        palabrasclave: values.palabrasClave,
        catedra: values.catedra.trim(),
      };
      const stringifuedRequest = JSON.stringify(requestObject);
      postArchivo(values.data, stringifuedRequest, user)
        .then(() => {
          setShowContent(null);
          window.location.reload(false);
        })
        .catch((error) => {
          setError(error.message);
        });
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex  w-full flex-wrap flex-col space-y-6 mb-6"
    >
      <div>
        <label className="inline-block w-56">Archivo</label>
        <input
          name="data"
          type="file"
          className="border rounded w-80"
          onChange={(event) => {
            formik
              .setFieldValue("data", event.currentTarget.files[0])
              .then(() =>
                formik.setFieldValue(
                  "nombre",
                  event.currentTarget.files[0].name
                )
              );
          }}
        />
        <div>
          {formik.errors.data ? (
            <div className="text-[red]">{formik.errors.data}</div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div>
        <label className="inline-block w-56">Nombre</label>
        <input
          name="nombre"
          type="text"
          className="border rounded w-80"
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
      </div>
      <div>
        <label className="inline-block w-56">Catedra</label>
        <input
          name="catedra"
          type="text"
          className="border rounded w-80"
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
      </div>
      <div>
        <label className="inline-block w-56">
          Palabras clave (p1,p2,p3,...)
        </label>
        <input
          name="palabrasClave"
          type="text"
          className="border rounded w-80"
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
      </div>

      <div className="flex w-full">
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
      </div>

      <div className="flex w-full">
        <Alert message={error} />
      </div>
    </form>
  );
}
