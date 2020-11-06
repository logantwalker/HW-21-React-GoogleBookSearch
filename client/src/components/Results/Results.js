import React from 'react';
import Books from './Books/Books'
import { Icon, Row } from 'react-materialize';
import 'materialize-css';


const Results = (props) => {
    let results;
    if (props.res.length) {
        results = (<Books books={props.res} />)
    }
    else {
        results = <h5 className='center-align'>{props.message}</h5>
    }
    return (
        <div className='search-card'>
            <Row className='card-header'>
                <h6 className='card-title'> <Icon tiny>book</Icon>Results</h6>
            </Row>
            <Row className='search-results'>
                {results}
            </Row>
        </div>
    )
}

export default Results;