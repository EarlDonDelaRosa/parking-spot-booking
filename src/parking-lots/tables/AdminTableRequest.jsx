import { Button, Modal } from "react-bootstrap";
import useForm from "../UseForm"
import useURL from "../useURL";

const AdminTableRequest = () => {
    const {
        handleApprove,
        handleReject,
        pending,
        showModal,
        showModalApprove,
        closeModal,
        handleModalReject,
        handleModalApprove
    } = useForm()

    return (
        <div>
            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                        <th className="p-3 txt-ctr">Bookings</th>
                        <th className="p-3 txt-ctr">Dates</th>
                        <th className="p-3 txt-ctr">Slots</th>
                        <th className="p-3 txt-ctr">Status</th>
                        <th className="p-3 txt-ctr">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pending.map((item, idx) => (
                            <tr key={idx}>
                                <td className="p-3 txt-ctr">{ item.date }</td>
                                <td className="p-3 txt-ctr">{ item.time }</td>
                                <td className="p-3 txt-ctr">{ item.slot }</td>
                                <td className="p-3 txt-ctr">{ item.status }</td>
                                <td className="txt-ctr">
                                    <button className="btn btn-success"
                                        onClick={() => handleApprove(item.id)}
                                        >Approve
                                    </button>
                                    <button className="btn btn-danger"
                                        onClick={() => handleReject(item.id)}
                                        >Reject
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {/* Modal for booking confirmation */}
            <Modal
                show={showModalApprove}
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
                    Approve the booking?
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>Cancel</Button>
                <Button variant="primary" onClick={handleModalApprove}>Confirm</Button>
            </Modal.Footer>
            </Modal>
            {/* Modal */}
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
                    Reject the booking?
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>Cancel</Button>
                <Button variant="primary" onClick={handleModalReject}>Confirm</Button>
            </Modal.Footer>
            </Modal>
            {/* Modal */}
        </div>
    )
}

export default AdminTableRequest