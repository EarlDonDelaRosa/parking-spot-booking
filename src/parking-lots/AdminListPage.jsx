import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import AdminTableBookings from "./tables/AdminTableBookings";
import UserContext from "./UserContext";

function AdminListPage() {
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
                    <h4>Booked dates and slots</h4>
                </div>
                <div>
                    <AdminTableBookings />
                </div>
                <div align='left'>
                    <Link
                        to='/admin'
                        className="btn btn-primary"
                        >{"<<"} Back
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AdminListPage