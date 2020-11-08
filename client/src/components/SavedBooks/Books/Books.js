import React from 'react';
import Book from './Book/Book';
import 'materialize-css';

const Books = (props) => {
    return (
        props.books.map(book => {
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
                />
            )
        })
    )
}

export default Books;