import React, { useContext } from "react";
import LoginPage from "./LoginPage";
import { Formik } from 'formik';
import * as Yup from 'yup';
import useURL from "./useURL";
import UserContext from "./UserContext";

function ValidateByFormik() {
    const URL = 'http://localhost:3000/userlist/';
    const USERLIST = useURL(URL);
    // const { setUser } = useContext(UserContext);

    // Errors for incorrect input --by earl
    const ErrorSchema = Yup.object().shape({
        username: Yup.string()
            .required('Username is required')
            .min(2, 'Username is too short')
            .max(15, 'Username is too long'),
        password: Yup.string()
            .required('Password is required')
    })

    // Validation to match database --by earl
    const handleLogin = value => {
        for (let i = 0; i < USERLIST.length; i++) {
            if (USERLIST[i].username === value.username) {
                if (USERLIST[i].password === value.password) {
                    // alert(JSON.stringify(value));
                    // setUser(USERLIST[i].name);
                    if (USERLIST[i].admin === 'Y') {
                        window.location.replace('/book-a-parking-spot/admin');
                        break;
                    } else {
                        localStorage.setItem('userId', USERLIST[i].id);
                        window.location.replace('/book-a-parking-spot/userpage');
                        break;
                    }
                }
                alert('Password did not matched');
                break;
            }
        }
    }

    // Formik validation --by earl
    return (
        <div>
            <Formik 
                initialValues={{
                    username: '',
                    password: ''
                }}
                onSubmit={(value) => {
                    handleLogin(value)
                }} 
                validationSchema={ErrorSchema}
                component={ LoginPage }/>
        </div>
    )
}

export default ValidateByFormik