import { ErrorMessage, Field } from "formik";

const PhoneField = () => {
  return (
    <div className="w-full flex flex-col mb-4">
      <label className="mb-1">Phone Number</label>
      <Field
        name="phone"
        type="text"
        className="border rounded p-1 outline-none"
      />
      <ErrorMessage name="phone" component="div" />
    </div>
  );
};

export default PhoneField;
