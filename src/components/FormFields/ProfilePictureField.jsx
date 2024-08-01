import { ErrorMessage } from "formik";
import { useState } from "react";

const ProfilePictureField = ({ setFieldValue }) => {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const fileObj = e.target.files[0];
    if (fileObj && fileObj.type === "image/png") {
      const fileUrl = URL.createObjectURL(fileObj);
      setFile(fileUrl);
      setFieldValue("profilePicture", fileUrl);
    } else {
      alert("Only PNG files are allowed");
    }
  };

  return (
    <div className="w-full flex items-center mb-2">
      <label className="mr-2">Profile Picture</label>
      <input type="file" accept="image/png" onChange={handleChange} />
      {file && (
        <img src={file} alt="Profile" style={{ width: 50, height: 50 }} />
      )}
      <ErrorMessage name="profilePicture" component="div" />
    </div>
  );
};

export default ProfilePictureField;
