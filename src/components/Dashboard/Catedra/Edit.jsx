import React from "react";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import { useServices } from "../../../context/servicesContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/authContext";
import Alert from "../../Alert";

export default function Edit() {
  const [error, setError] = React.useState(false);

  const { id } = useParams(); // Obtenemos el id de la catedra a partir de la url de la ruta
  const { user } = useAuth(); // Obtenemos el usuario actual
  const navigate = useNavigate(); // Obtenemos el navigate para redireccionar, a partir del hook provisto por react router dom
  const { putCatedra, getCatedra } = useServices(); // Obtenemos el servicio de putCatedra y getCatedra

  React.useEffect(() => {
    getCatedra(id).then((res) => {
      // A partir de los datos obtenidos, seteamos los valores del formulario
      formik.setFieldValue("nombre", res.nombre);
      formik.setFieldValue("web", res.urlPaginaWeb);
    });
  }, []);

  const formik = useFormik({
    initialValues: {
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
      const catedra = {
        idCatedra: values.nombre,
        url: values.web,
      };
      putCatedra(catedra, user)
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
          disabled
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
        <Alert message={error} />
      </form>
    </div>
  );
}
