import React, { useContext, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Todoapp from '../Context/Todo'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const List = () => {
    const sahil = useContext(Todoapp)
    // console.log('sahil::: ', sahil);
    const [sutariya, setSutariya] = useState(sahil.allData)

    const [show, setShow] = useState(false);
    const [did, setDid] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const clickTodelet = (id) => {
        const delet = sutariya.filter((ele, i) => i !== id)

        setSutariya(delet)
    }

    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Number</th>
                        <th>password</th>
                        <th>Hobby</th>
                        <th>Select</th>
                        <th>Gender</th>
                        <th>Textarea</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sutariya.map((ele, indext) => {
                            return (
                                <tr key={ indext }>
                                    <th>{ indext + 1 }</th>
                                    <th>{ ele.name }</th>
                                    <th>{ ele.email }</th>
                                    <th>{ ele.number }</th>
                                    <th>{ ele.Password }</th>
                                    <th>{ ele.hobby }</th>
                                    <th>{ ele.select }</th>
                                    <th>{ ele.gender } </th>
                                    <th>{ ele.textarea }</th>
                                    <th>
                                        <Button variant="danger  m-2" onClick={ () => { handleShow(); setDid(indext) } }>
                                            Delet
                                        </Button>

                                        <Link to={ `/edit/${indext}` }>
                                            <Button variant="warning m-2">Edit</Button>
                                        </Link>
                                    </th>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <Link to={ '/' }>
                <Button variant="warning ">Cancle</Button>
            </Link>


            <Modal show={ show } onHide={ handleClose }>
                <Modal.Header closeButton>
                    <Modal.Title>Heyyy!!!!!!!!!!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure to delet </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={ () => { handleClose(); clickTodelet(did) } }>
                        Yes
                    </Button>
                    <Button variant="secondary" onClick={ handleClose }>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default List
