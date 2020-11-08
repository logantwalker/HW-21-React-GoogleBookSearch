import React, { useState, useEffect } from 'react';
import Book from '../../components/SavedBooks/Book/Book';
import API from '../../utils/API';
import { Icon, Row } from 'react-materialize';
import 'materialize-css'

const Saved = () => {
    const [booksObj, setBooks] = useState({
        books: [],
        message: "Save some books to get started!"
    });

    useEffect(() => {
        getSavedBooks();
    }, []);

    const getSavedBooks = () => {
        API.getSavedBooks()
            .then(res =>
                setBooks({
                    books: res.data,
                    message: booksObj.message
                })
            )
            .catch(err => console.log(err));
    };
    const handleBookDelete = id => {
        API.deleteBook(id).then(res => getSavedBooks());
    };


    let results;
    if (booksObj.books.length) {
        results = (
            booksObj.books.map(book => {
                return (
                    <Book
                        key={book.googleId}
                        bookId={book._id}
                        title={book.title}
                        subtitle={book.subtitle}
                        link={book.link}
                        authors={book.authors.join(", ")}
                        description={book.description}
                        image={book.image}
                        click={() => handleBookDelete(book._id)}
                    />
                )
            })
        )
    }
    else {
        results = <h5 className='center-align'>{booksObj.message}</h5>
    }

    return (
        <div className='container'>
            <div className='search-card'>
                <Row className='card-header'>
                    <h6 className='card-title'> <Icon tiny>book</Icon>Saved Books</h6>
                </Row>
                <Row className='search-results'>
                    {results}
                </Row>
            </div>
        </div>
    );
}

export default Saved;
