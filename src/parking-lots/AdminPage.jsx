import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import AdminTableRequest from "./tables/AdminTableRequest";
import UserContext from "./UserContext";

function AdminPage() {
    const {user} = useContext(UserContext);

    return (
        <div className="App">
            <div className="m-5 row">
                <div className="mb-3 col-9" align='left'>
                    <h5>Welcome </h5><h2>{ user }</h2>
                </div>
                <div className="col-3" align='right'>
                    <Link to='/' className="btn btn-secondary">Logout</Link>
                </div>
                <div className="mb-2" align='left'>
                    <h4>Requested bookings</h4>
                </div>
                <div>
                    <AdminTableRequest />
                </div>
                <div align='right'>
                    <Link
                        to='/adminlist'
                        className="btn btn-primary"
                        >See all booked parking spots {">>"}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AdminPage