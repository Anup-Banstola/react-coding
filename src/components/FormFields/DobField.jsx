import { ErrorMessage, Field } from "formik";

const DobField = () => {
  return (
    <div className="w-full flex flex-col mb-4">
      <label className="mb-1">DOB</label>
      <Field
        name="dob"
        type="date"
        className="border rounded p-1 outline-none"
      />
      <ErrorMessage name="dob" component="div" />
    </div>
  );
};

export default DobField;
