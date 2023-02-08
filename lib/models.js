import * as Yup from "yup";

export const SchemaForm = Yup.object().shape({
  action: Yup.string().required("Campo requerido"),
  appkey: Yup.string().required("Campo requerido"),
  pilot_firstname: Yup.string().required("Campo requerido"),
  pilot_contact_type_id: Yup.string().nullable().required("Campo requerido"),
  pilot_business_type_id: Yup.string().nullable().required("Campo requerido"),
  pilot_suborigin_id: Yup.string().required("Campo requerido"),
});
