import { ErrorMessage, Field } from "formik";

const NameField = () => {
  return (
    <div className="w-full mb-4 flex flex-col">
      <label className="mb-1">Name</label>
      <Field
        name="name"
        type="text"
        className="border rounded p-1 outline-none"
      />
      <ErrorMessage name="name" component="div" />
    </div>
  );
};

export default NameField;
