import React, { useContext } from "react";
import UserContext from "./UserContext";
import { Link } from 'react-router-dom';
import UserTable from "./tables/UserTable";
import { Form, Field } from 'formik';

function UserPage({errors, touched, isValid, dirty}) {
    // const { user } = useContext(UserContext);
    const disablePastDate = () => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };

    return (
        <div className="App">
            <div className="m-5 row">
                <div className="mb-3 col-9" align='left'>
                    <h5>Welcome </h5>
                    {/* <h2>{ user }</h2> */}
                </div>
                <div className="col-3" align='right'>
                <Link to='/' className="btn btn-secondary">Logout</Link>
                </div>
                <hr />
                <Form className="col-4">
                    <div className="mb-3" align='left'>
                        <h4>Book a Parking Spot</h4>
                    </div>
                    <div className="mb-3 col-8" align='left'>
                        <label className="form-label">Select a date</label>
                        <Field type="date" 
                            className="form-control" 
                            name="date"
                            min={disablePastDate()}
                        />
                        <div className="mb-3">
                        {
                            touched.date && 
                            errors.date &&
                            <small className="ms-2 txt-danger">{ errors.date }</small>
                        }
                        </div>
                        <label className="form-label">Select a time</label>
                        <Field as='select' 
                            name="time" 
                            id="time" 
                            className="form-select" 
                            >
                            <option defaultValue={'Please Select'}>Please Select</option>
                            <option value="AM">Morning Spot</option>
                            <option value="PM">Afternoon Spot</option>
                            <option value="FULL">Whole Day Spot</option>
                        </Field>
                        <div className="mb-3">
                        {
                            touched.time && 
                            errors.time &&
                            <small className="ms-2 txt-danger">{ errors.time }</small>
                        }
                        </div>
                        <label className="form-label">How many slots? (1-15)</label>
                        <Field type="number"
                            className="form-control"
                            name="slot"
                            min={1} max={15}
                        />
                        <div className="mb-3">
                        {
                            touched.slot && 
                            errors.slot &&
                            <small className="ms-2 txt-danger">{ errors.slot }</small>
                        }
                        </div>
                    </div>
                    {/* <span>{ bookError }</span> */}
                    <div align='left'>
                        <button
                            type="submit"
                            className='btn btn-primary'
                            disabled={!isValid || !dirty}
                            >Send Request
                        </button>
                    </div>
                </Form>
                {/* Table for past bookings */}
                <div className="col-8">
                    <UserTable />
                </div>
            </div>
        </div>
    )
}

export default UserPage