import * as yup from "yup";

const ValidationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup
    .string()
    .min(7, "Phone number must be at least 7 digits")
    .required("Phone number is required"),
  dob: yup.date().required("Date of Birth is required"),
  address: yup.object().shape({
    city: yup.string().required("City is required"),
    district: yup.string().required("District is required"),
    province: yup.string().required("Province is required"),
    country: yup.string().required("Country is required"),
  }),
  profilePicture: yup.string().required("Profile picture is required"),
});

export default ValidationSchema;
