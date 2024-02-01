import { useSelector } from "react-redux";
import {useState} from 'react'

const BookList = (props) => {
    const books = useSelector((state) => state.books.books);
    const [filter, setFilter] = useState('All Books');
    // console.log(books);

    const fillterBooks = books.filter(book => {
        if(filter === 'All Books') return book;
        if(filter === 'Thriller') return book.genre === 'Thriller'
        if(filter === 'Fantasy') return book.genre === 'Fantasy'
        if(filter === 'Horror') return book.genre === 'Horror'
        if(filter === 'Romance') return book.genre === 'Romance'
        if(filter === 'Science fiction') return book.genre === 'Science fiction'
        if(filter === 'Mystery') return book.genre === 'Mystery'
        if(filter === 'Biography') return book.genre === 'Biography'
        if(filter === 'Adventure') return book.genre === 'Adventure'
    })

    return(
        <div>
            <div>
                <h1>Books List</h1>
                <button onClick={() => setFilter("All Books")}>All Books</button>
                <button onClick={() => setFilter("Thriller")}>Thriller</button>
                <button onClick={() => setFilter("Fantasy")}>Fantasy</button>
                <button onClick={() => setFilter("Horror")}>Horror</button>
                <button onClick={() => setFilter("Romance")}>Romance</button>
                <button onClick={() => setFilter("Science fiction")}>Science fiction</button>
                <button onClick={() => setFilter("Mystery")}>Mystery</button>
                <button onClick={() => setFilter("Biography")}>Biography</button>
                <button onClick={() => setFilter("Adventure")}>Adventure</button>
            </div>
            <div>
            <ul>
            {fillterBooks.map((book) => (
                <li key={book.id}>
                <span>Title: {book.title}</span>{" "}
                <span>Author: {book.author}</span>{" "}
                <p>Genre: {book.genre}</p>{" "}
                </li>
                ))}
            </ul>
            </div>
        </div>
    );
}

export default BookList