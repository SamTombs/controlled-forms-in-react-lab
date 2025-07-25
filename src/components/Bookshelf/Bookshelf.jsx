import { useState } from "react";


const Bookshelf = () => {
const [books, setBooks] = useState([
  { title: "The Lord of the Rings", author: "JRR Tolkein" },
  { title: "The Pillars of Earth", author: "Ken Follett" },
]);
console.log(books)
const [newBook, setNewBook] = useState({ title: "", author: "" });

const handleInputChange = (event) => {
  setNewBook((prevState) => ({
    ...prevState,
    [event.target.name]: event.target.value,
  }));
  console.log(newBook)
};

const handleBookSubmit = (event) => {
  event.preventDefault();
  setBooks(prevState => [...prevState, newBook]);
  setNewBook({ title: "", author: "" });
};

return (

<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    <form onSubmit={handleBookSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={newBook.title}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input
          type="text"
          name="author"
          value={newBook.author}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
  <div className="bookCardsDiv">
    <div>
        {books.map((book) => (
            <div className="bookCard">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            </div>
        ))}
    </div>
  </div>
</div>
);
};

export default Bookshelf;
