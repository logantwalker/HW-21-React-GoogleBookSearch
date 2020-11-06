import React from 'react';
import { Row, Col, Button} from 'react-materialize';
import API from '../../../../utils/API';

import 'materialize-css';

const Book = (props) => {
    const bookObj = {
        id: props.bookId,
        title: props.title,
        subtitle: props.subtitle,
        link: props.link,
        authors: props.authors,
        description: props.description,
        image: props.image
    }

    return (
        <Row className='book-card'>
            <Col s={9} className='book-title'>
                <h5>{props.title}</h5>
            </Col>
            <Col s={3}>
                <a href={props.link} className="result-btn waves-effect waves-light btn">View</a>
                <Button 
                    className='result-btn'>
                        Delete
                </Button>
            </Col>
            <Col s={12} className='book-subtitle'>
                <h6>{props.subtitle}</h6>
            </Col>
            <Col className='book-image'>
                <img alt={props.title} src={props.image}></img>
            </Col>
            <Col s={12} m={9} className='book-desc'>
                <p>{props.description}</p>
            </Col>


        </Row>
    )
}

export default Book;