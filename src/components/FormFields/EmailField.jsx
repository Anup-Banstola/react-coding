import { ErrorMessage, Field } from "formik";

const EmailField = () => {
  return (
    <div className="w-full mb-4 flex flex-col">
      <label className="mb-1">Email</label>
      <Field
        name="email"
        type="email"
        className=" border rounded p-1 outline-none"
      />
      <ErrorMessage name="email" component="div" />
    </div>
  );
};

export default EmailField;
