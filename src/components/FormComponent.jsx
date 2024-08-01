import useCountries from "../hooks/useCountries";
import useEntries from "../hooks/useEntries";
import { Form, Formik } from "formik";
import NameField from "./FormFields/NameField";
import EmailField from "./FormFields/EmailField";
import PhoneField from "./FormFields/PhoneField";
import DobField from "./FormFields/DobField";
import AddressFields from "./FormFields/AddressFields";
import ProfilePictureField from "./FormFields/ProfilePictureField";
import { Button, Modal, notification } from "antd";
import TableComponent from "./TableComponent";
import { useState } from "react";
import ValidationSchema from "../utils/FormValidationSchema";

const FormComponent = () => {
  const countries = useCountries();

  const { entries, addEntry, deleteEntry, getEntryById, updateEntry } =
    useEntries();
  const [currentPage, setCurrentPage] = useState(1);
  const [editingEntry, setEditingEntry] = useState(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const [confirmEditId, setConfirmEditId] = useState(null);

  const handleFormSubmit = (values, { resetForm }) => {
    if (editingEntry) {
      const updatedEntry = {
        ...editingEntry,
        ...values,
      };
      updateEntry(updatedEntry);
      notification.success({ message: "Entry updated successfully!" });
      setEditingEntry(null);
    } else {
      const newEntry = {
        id: Date.now(),
        ...values,
      };
      addEntry(newEntry);
      notification.success({ message: "Entry added successfully!" });
    }
    resetForm();
  };

  const handleEdit = (id) => {
    setConfirmEditId(id);
  };

  const handleDelete = (id) => {
    setConfirmDeleteId(id);
  };

  const confirmEditAction = () => {
    const entryToEdit = getEntryById(confirmEditId);
    setEditingEntry(entryToEdit);
    setConfirmEditId(null);
  };

  const confirmDeleteAction = () => {
    deleteEntry(confirmDeleteId);
    notification.success({ message: "Entry deleted successfully!" });
    setConfirmDeleteId(null);
  };

  const displayedEntries = entries.slice(
    (currentPage - 1) * 5,
    currentPage * 5
  );
  console.log(displayedEntries);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const initialValues = editingEntry || {
    name: "",
    email: "",
    phone: "",
    dob: "",
    address: {
      city: "",
      district: "",
      province: "1",
      country: "Nepal",
    },
    profilePicture: null,
  };

  return (
    <div className="container mx-auto p-4">
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ setFieldValue }) => (
          <Form className="space-y-4">
            <div className=" shadow-md rounded mx-auto my-4  p-4 max-w-[70vw] min-w-[40vw]">
              <NameField />
              <EmailField />
              <PhoneField />
              <DobField />
              <AddressFields countries={countries} />
              <ProfilePictureField setFieldValue={setFieldValue} />
              <div className="flex justify-end">
                <Button type="primary" htmlType="submit">
                  {editingEntry ? "Update Entry" : "Add Entry"}
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <div>
        <TableComponent
          entries={displayedEntries}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>
      <div className="flex justify-end gap-2 m-4">
        <Button
          type="primary"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>

        <Button
          type="primary"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={entries.length <= currentPage * 5}
        >
          Next
        </Button>
      </div>

      <Button
        type="link"
        onClick={() => (window.location.href = "/profiles")}
        className="font-medium text-xl p-4"
      >
        Go to Profiles
      </Button>
      <Modal
        title="Confirm Edit"
        open={confirmEditId !== null}
        onOk={confirmEditAction}
        onCancel={() => setConfirmEditId(null)}
      >
        <p>Are you sure you want to edit this entry?</p>
      </Modal>
      <Modal
        title="Confirm Delete"
        open={confirmDeleteId !== null}
        onOk={confirmDeleteAction}
        onCancel={() => setConfirmDeleteId(null)}
      >
        <p>Are you sure you want to delete this entry?</p>
      </Modal>
    </div>
  );
};

export default FormComponent;
