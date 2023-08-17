import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Dashbord = () => {
    return (
        <div>
            <Link to={ "/add" }>
                <Button variant="primary m-2">Add</Button>
            </Link>
            <Link to={ "/list" }>
                <Button variant="secondary m-2">List</Button>
            </Link>
        </div>
    )
}

export default Dashbord
