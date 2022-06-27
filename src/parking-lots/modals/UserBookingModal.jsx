import React from "react";
import { Button, Modal } from "react-bootstrap";
import useForm from "../UseForm";

function UserBookingModal() {
    const {
        handleModalConfirm,
        bookDate,
        showModal,
        closeModal
    } = useForm();

    return (
        <div>
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

export default UserBookingModal