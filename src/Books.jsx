import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Form validation using Formik and Yup
const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required("title is required")
    .min(3, "Atleast 3 characters")
    .max(8, " maximum 8 characters allowed"),
  author: Yup.string()
    .required("author name is required")
    .min(3, "Atleast 3 characters")
    .max(8, " maximum 8 characters allowed"),
  isbnNumber: Yup.number()
    .required("number required")
    .min(3, "Atleast 3 digits")
    .max(8, " maximum 8 digits allowed"),
  publicationDate: Yup.date()
    .required("date required")
    .min(new Date(), "date should not be in future"),
});
function Books() {
  // const { values, touched, errors, isSubmitting } = useFormikContext();
 // State to store the list of books
  const [books, setBooks] = useState([]);

   // State to manage the input value
  const [titleValue, setTitleValue] = useState("");
  const [authorValue, setAuthorValue] = useState("");
  const [isbnNumberValue, setisbnNumberValue] = useState("");
  const [publicationDateValue, setpublicationDateValue] = useState("");

  // State to manage the index of the book being edited
  const [editIndex, setEditIndex] = useState(null);

  // Function to handle adding or updating book
  const handleAddBook = () => {
    if (editIndex !== null) {
      // If editIndex is not null, update the existing book
      const newBooks = [...books];
      newBooks[editIndex] = {
        title: titleValue,
        author: authorValue,
        isbnNumber: isbnNumberValue,
        publicationDate: publicationDateValue,
      };
      setBooks(newBooks);
      setEditIndex(null);
    } else {
      // If editIndex is null, add a new book to the list
     if(titleValue && authorValue && isbnNumberValue && publicationDateValue){
      setBooks([
        ...books,
        {
          title: titleValue,
          author: authorValue,
          isbnNumber: isbnNumberValue,
          publicationDate: publicationDateValue,
        },
      ]);
     }
      
    }
    // Reset input value after adding or updating
    setTitleValue("");
    setAuthorValue("");
    setisbnNumberValue("");
    setpublicationDateValue("");
  };

    // Function to handle deleting book
  const handleDeleteBook = (index) => {
    const newBooks = [...books];
    newBooks.splice(index, 1);
    setBooks(newBooks);
    if (editIndex === index) {
      // Reset editIndex if the deleted book was being edited
      setEditIndex(null);
    }
  };

  // Function to handle editing book
  const handleEditBook = (index) => {
    setTitleValue(books[index].title);
    setAuthorValue(books[index].author);
    setisbnNumberValue(books[index].isbnNumber);
    setpublicationDateValue(books[index].publicationDate);
    setEditIndex(index);
  };

  return (
    <div>
      <h1>Book List</h1>
      <div>
        <Formik
          initialValues={{
            title: "",
            author: "",
            isbnNumber: "",
            publicationDate: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <Field
              type="text"
              name="title"
              value={titleValue}
              onChange={(e) => setTitleValue(e.target.value)}
              placeholder="Enter Book title"
            />
            <br />
            <ErrorMessage name="title" component="div" />
            <Field
              type="text"
              name="author"
              value={authorValue}
              onChange={(e) => setAuthorValue(e.target.value)}
              placeholder="Enter author name"
            />
            <br />
            <ErrorMessage name="author" component="div" />

            <Field
              type="number"
              name="isbnNumber"
              value={isbnNumberValue}
              onChange={(e) => setisbnNumberValue(e.target.value)}
              placeholder="Enter isbn number"
            />
            <br />
            <ErrorMessage name="isbnNumber" component="div" />

            <Field
              type="date"
              name="publicationDate"
              value={publicationDateValue}
              onChange={(e) => setpublicationDateValue(e.target.value)}
              placeholder="Enter publication date"
            />
            <br />
            <ErrorMessage name="publicationDate" component="div" />

            {/* <pre>{JSON.stringify({ values, touched, errors }, null, 2)}</pre> */}
            <button
              type="submit"
              className="btn btn-primary"
              // disabled={isSubmitting}
              onClick={handleAddBook}
            >
              {editIndex !== null ? "Edit" : "Add"}
            </button>
          </Form>
        </Formik>
      </div>

      <table className="table table-bordered border-primary table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN Number</th>
            <th>Publication date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.isbnNumber}</td>
              <td>{book.publicationDate}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => handleEditBook(index)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteBook(index)}
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
export default Books;
