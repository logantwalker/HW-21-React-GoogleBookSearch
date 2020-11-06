import React from 'react';
import { Icon, Row, Col, TextInput, Button } from 'react-materialize';
import './search.css';
import 'materialize-css';


const Search = (props) => {
    return (
        <div className='search-card'>
            <Row className='card-header'>
                <h6 className='card-title'> <Icon tiny>book</Icon>Book Search</h6>
            </Row>
            <Row className='valign-wrapper'>
                <Col className='card-body' s={9}>
                    <TextInput
                        id="book-search"
                        placeholder="Search for a book..."
                        onChange={props.change}
                    />
                </Col>
                <Col>
                    <Button
                        node="button"
                        waves="light"
                        onClick={props.click}
                    >
                        Search
                        <Icon right>
                            search
                        </Icon>
                    </Button>
                </Col>
            </Row>
        </div>
    )
}

export default Search;