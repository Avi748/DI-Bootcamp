import React, {useState} from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap';

const Book = () => {
    const [book, setBook] = useState("")
    const [result, setResult] = useState([]);

    function handleChange(e) {  
        const book = e.target.value;
        setBook(book);
    }
    
    function handleSubmit(e) {  
        e.preventDefault();  
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book)
        .then(data => {  
        // console.log(data.data.items);
        setResult(data.data.items);
        })
    }

    return (  
        <form onSubmit={handleSubmit}>
            <div className="card-header main-search">  
                <div className="row">  
                    <div className="container col-12 col-md-6 col-xl-3 b-5">
                        <input onChange={handleChange} className="AutoFocus form-control" placeholder="Type something..." type="text" />
                    </div>  
                    <div className="ml-auto">  
                        <input type="submit" value="Search" className="btn btn-primary search-btn"/>
                    </div>  
                </div>  
            </div>
            <div className="container"> 
                <div className="row">  
                    {result.map(book => (  
                    <div className="col-sm-2">
                        <Card style={{ 'marginTop': '10px' }}>
                            <Card.Img variant="top" src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ''} alt={book.title} />
                            <Card.Body>  
                                <h5 className="card-title">{book.volumeInfo.title}</h5>
                                    <p>{"Author: " + book.volumeInfo.authors}</p>
                                    <p>{"Published year: " + book.volumeInfo.publishedDate}</p>
                            </Card.Body>  
                        </Card>  
                    </div>
                    ))}
                </div>  
            </div> 
        </form>
    )
}

export default Book