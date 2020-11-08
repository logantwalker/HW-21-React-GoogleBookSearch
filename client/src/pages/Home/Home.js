import React, { useState } from 'react';
import Search from '../../components/Search/Search';
import Book from '../../components/Results/Book/Book';
import { Icon, Row} from 'react-materialize';
import API from '../../utils/API';
import 'materialize-css'

const Home = () => {
    const [searchState, setSearch] = useState({
        books: [],
        q: '',
        message: "Search For A Book To Begin!"
    });

    const handleFormInput = (event) => {
        setSearch({
            books: searchState.books,
            q: event.target.value,
            message: searchState.message
        })
    }

    const getBooks = () => {
        API.getBooks(searchState.q)
            .then(res => {
                setSearch({
                    books: res.data,
                    q: searchState.q,
                    message: searchState.message
                })
            }
            )
            .catch(() =>
                setSearch({
                    books: [],
                    message: "No New Books Found, Try a Different Query"
                })
            );
    };

    const handleBookSave = (id) => {
        const book = searchState.books.find(book => book.id === id);

        API.saveBook({
            googleId: book.id,
            title: book.volumeInfo.title,
            subtitle: book.volumeInfo.subtitle,
            link: book.volumeInfo.infoLink,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail
        }).then(() => getBooks());

    }

    let results;
    if (searchState.books.length) {
        results = (
            searchState.books.map(book => {
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
                        click={() => handleBookSave(book.id)}
                    />
                )
            })
        )
    }
    else {
        results = <h5 className='center-align'>{searchState.message}</h5>
    }

    return (
        <div className='container'>
            <Search change={(e) => handleFormInput(e)} click={() => getBooks()} />
            <div className='search-card'>
                <Row className='card-header'>
                    <h6 className='card-title'> <Icon tiny>book</Icon>Results</h6>
                </Row>
                <Row className='search-results'>
                    {results}
                </Row>
            </div>
        </div>
    );
}

export default Home;

