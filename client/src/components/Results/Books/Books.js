import React from 'react';
import Book from './Book/Book';
import 'materialize-css';

const Books = (props) => {
    return (
        props.books.map(book => {
            return (
                <Book
                    key={book.id}
                    bookId={book.id}
                    title={book.volumeInfo.title}
                    subtitle={book.volumeInfo.subtitle}
                    link={book.volumeInfo.infoLink}
                    authors={book.volumeInfo.authors.join(", ")}
                    description={book.volumeInfo.description}
                    image={book.volumeInfo.imageLinks.thumbnail}
                />
            )
        })
    )
}

export default Books;