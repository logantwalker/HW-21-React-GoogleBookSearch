import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import SavedBooks from '../../components/SavedBooks/SavedBooks';
import { Icon, Row } from 'react-materialize';
import 'materialize-css'

const Saved = () => {
    const [booksObj, setBooks] = useState({
        books: [],
        message: "Save some books to get started!",
        rerender: false
    });

    useEffect(()=>{
        getSavedBooks();
        initRenderCheck();
        console.log('useEffect')
    },[]);
    
    const initRenderCheck = () =>{
        setBooks({
            books: booksObj.books,
            message: booksObj.message,
            rerender: false
        })
    }

    const didDelete = () =>{
        setBooks({
            books: booksObj.books,
            message: booksObj.message,
            rerender: true
        })
    }
    

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

    return (
        <div className='container'>
            <SavedBooks message={booksObj.message} res={booksObj.books} />
        </div>
    );
}

export default Saved;
