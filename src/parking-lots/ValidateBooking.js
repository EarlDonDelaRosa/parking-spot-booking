import React, { useState } from "react";
import { Formik } from 'formik';
import * as Yup from 'yup';
import UserPage from "./UserPage";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import useForm from "./UseForm";

function ValidateBooking() {
    const URL = 'http://localhost:3000/';
    const [showModal, setShowModal] = useState(false);
    const [bookDate, setBookDate] = useState({});
    const { bookings, setBookings } = useForm();

    // Errors for incorrect input --by earl
    const ErrorSchema = Yup.object().shape({
        date: Yup.date()
            .min(new Date(), 'No more slots for today')
            .required('Date is required'),
        time: Yup.string()
            .required('Time is required'),
        slot: Yup.string()
            .required('Slot is required')
    })

    // Modal to show --by earl
    const handleBook = value => {
        setBookDate(value);
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const handleModalConfirm = () => {
        let userId = localStorage.getItem('userId');
        axios.post(URL + 'bookings/', {
            ...bookDate,
            status: 'Pending',
            userId: "id"+userId,
            keyid: bookings.length + 1,
        })
        .then((res) => console.log(res))

        axios.post(`${URL}id${userId}/`, {
            ...bookDate,
            status: 'Pending'
        })
        .then((res) => console.log(res))
        setShowModal(false);
        // document.location.reload()
    }

    // Formik validation --by earl
    return (
        <div>
            <Formik 
                initialValues={{
                    date: '',
                    time: '',
                    slot: ''
                }}
                onSubmit={(value) => {
                    handleBook(value)
                    console.log(value)
                }} 
                validationSchema={ErrorSchema}
                component={ UserPage }
            />

                {/* Modal for booking confirmation */}
                <Modal
                    show={showModal}
                    onHide={closeModal}
                    backdrop="static"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    keyboard={false}
                >
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        Request a parking spot on { bookDate.date }<br/>
                        with { bookDate.slot } slots for { bookDate.time }?<br/>
                        Proceed?
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>Cancel</Button>
                    <Button variant="primary" onClick={handleModalConfirm}>Confirm</Button>
                </Modal.Footer>
                </Modal>
                {/* Modal */}
        </div>
    )
}

export default ValidateBooking