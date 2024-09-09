import { useId } from "react";

import { Formik } from "formik";
import { Form, Field } from "formik";
import { ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactForm = ({ formSubmit }) => {
  const initialValues = {
    name: "",
    number: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "min.length - 3")
      .max(50, "max.length - 50")
      .required("is required"),
    number: Yup.string()
      .min(3, "min.length - 3")
      .max(50, "max.length - 50")
      .required("is required"),
  });

  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, { resetForm }) => {
    formSubmit({
      name: values.name,
      number: values.number,
    });
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="name">
            Name:
            <ErrorMessage name="name" component="span" />
          </label>
          <Field type="text" name="name" id={nameFieldId} />
        </div>
        <div>
          <label htmlFor="number">
            Number:
            <ErrorMessage name="number" component="span" />
          </label>
          <Field type="text" name="number" id={numberFieldId} />
        </div>
        <button type="submit">Add new Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
