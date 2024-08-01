import { Field, ErrorMessage } from "formik";

const AddressFields = ({ countries }) => (
  <div>
    <div className="w-full flex mb-4 flex-col">
      <label>City</label>
      <Field
        name="address.city"
        type="text"
        className=" border rounded p-1 outline-none"
      />
      <ErrorMessage name="address.city" component="div" />
    </div>
    <div className="w-full mb-4 flex flex-col ">
      <label className="mb-1">District</label>
      <Field
        name="address.district"
        type="text"
        className="  border rounded p-1 outline-none"
      />
      <ErrorMessage name="address.district" component="div" />
    </div>
    <div className="w-full flex flex-col mb-4">
      <label className="mb-1">Province</label>
      <Field
        as="select"
        name="address.province"
        className="border rounded p-1 outline-none"
      >
        {[1, 2, 3, 4, 5, 6, 7].map((province) => (
          <option key={province} value={province}>
            Province {province}
          </option>
        ))}
      </Field>
      <ErrorMessage name="address.province" component="div" />
    </div>
    <div className="w-full flex flex-col mb-4">
      <label className="mb-1">Country</label>
      <Field
        as="select"
        name="address.country"
        className=" border rounded p-1 outline-none"
      >
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </Field>
      <ErrorMessage name="address.country" component="div" />
    </div>
  </div>
);

export default AddressFields;
