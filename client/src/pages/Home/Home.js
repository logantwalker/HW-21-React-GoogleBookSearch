import React, { useState } from 'react';
import Search from '../../components/Search/Search';
import Results from '../../components/Results/Results';
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

    return (
        <div className='container'>
            <Search change={(e) => handleFormInput(e)} click={() => getBooks()} />
            <Results res={searchState.books} message={searchState.message} />
        </div>
    );
}

export default Home;

