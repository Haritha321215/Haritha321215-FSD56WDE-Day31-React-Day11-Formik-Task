import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const today = new Date();
const midnight = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate()
);
// Form validation using Formik and Yup
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Atleast 3 characters")
    .max(8, " maximum 8 characters allowed"),
  birthdate: Yup.date()
    .required("Date is required")
    .max(midnight, "Date cannot be in the future"),
  bio: Yup.string()
    .required("bio data is required")
    .max(200, "maximum 40 words"),
});

function Authors() {

  // State to store the list of authors
  const [authors, setAuthors] = useState([]);

   // State to manage the input value
  const [nameValue, setNameValue] = useState("");

  // State to manage the index of the author being edited
  const [birthdateValue, setBirthdateValue] = useState("");
  const [biographyValue, setBiographyValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // Function to handle adding or updating author
  const handleAddAuthor = () => {
    if (editIndex !== null) {
      // If editIndex is not null, update the existing author
      const newAuthors = [...authors];
      newAuthors[editIndex] = {
        name: nameValue,
        birthdate: birthdateValue,
        biography: biographyValue,
      };
      setAuthors(newAuthors);
      setEditIndex(null);
    } else {
      // If editIndex is null, add a new author to the list
      if (nameValue && birthdateValue && biographyValue) {
        setAuthors([
          ...authors,
          {
            name: nameValue,
            birthdate: birthdateValue,
            biography: biographyValue,
          },
        ]);
      }
    }
    // Reset input value after adding or updating
    setNameValue("");
    setBirthdateValue("");
    setBiographyValue("");
  };

  // Function to handle deleting author
  const handleDeleteAuthor = (index) => {
    const newAuthors = [...authors];
    newAuthors.splice(index, 1);
    setAuthors(newAuthors);
    if (editIndex === index) {
       // Reset editIndex if the deleted author was being edited
      setEditIndex(null);
    }
  };

   // Function to handle editing an author
  const handleEditAuthor = (index) => {
    setNameValue(authors[index].name);
    setBirthdateValue(authors[index].birthdate);
    setBiographyValue(authors[index].biography);
    setEditIndex(index);
  };

  return (
    <div>
      <h1>Author List</h1>
      <div>
        <Formik
          initialValues={{ name: "", birthdate: "", bio: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log("Submitted:", values);
          }}
        >
          <Form>
            <Field
              name="name"
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
              placeholder="Enter Author name"
            />
            <br />
            <ErrorMessage name="name" component="div" className="error" />
            <br />
            <Field
              name="birthdate"
              value={birthdateValue}
              type="date"
              onChange={(e) => setBirthdateValue(e.target.value)}
              placeholder="Enter author's birth date"
            />
            <br />
            <ErrorMessage name="birthdate" component="div" className="error" />
            <br />
            <Field
              name="bio"
              value={biographyValue}
              onChange={(e) => setBiographyValue(e.target.value)}
              placeholder="Enter author's biography"
            />
            <br />
            <ErrorMessage name="bio" component="div" className="error" />
            <br />
            <button className="btn btn-primary" onClick={handleAddAuthor}>
              {editIndex !== null ? "Edit" : "Add"}
            </button>
            {/* Render all form-level errors */}
          </Form>
        </Formik>
      </div>
      <table className="table table-bordered border-primary table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>BirthDate</th>
            <th>Biography</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author, index) => (
            <tr key={author.id}>
              <td>{author.name}</td>
              <td>{author.birthdate}</td>
              <td>{author.biography}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => handleEditAuthor(index)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteAuthor(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Authors;
