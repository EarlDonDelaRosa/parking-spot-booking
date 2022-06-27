import React from "react";
import useForm from "./UseForm";
import validate from "./ValidateForm";
import { Form, Field } from 'formik';

function LoginPage({errors, touched, isValid, dirty}) {
    const {
        onChangeLogin,
        handleLogin,
        errorInput
    } = useForm(validate);

    // function validateUsername(value) {
    //     let error;
    //     if (value === 'earl') {
    //         error = 'GOTCHA!!!'
    //     }
    //     return error
    // }

    // console.log(errors)
    return (
        <Form className="App">
            <div className="App-header" align='center'>
                <div className="mb-3">
                    <h2>Login</h2>
                </div>
                <div className='form-floating col-4 mb-3' align='left'>
                    <Field type="text" 
                        className={touched.username ? 
                            `form-control ${errors.username ? 'invalid' : 'valid'}`
                             : `form-control`}
                        placeholder='Username'
                        name='username'
                        // validate={validateUsername}
                        // onChange={onChangeLogin}
                    />
                    <label style={{color: 'black'}}>
                        Username
                    </label>
                    {
                        touched.username && 
                        errors.username &&
                        <small className="ms-2 txt-danger">{ errors.username }</small>
                    }
                </div>
                <div className='form-floating col-4 mb-3' align='left'>
                    <Field type="password" 
                        className={touched.password ? 
                            `form-control ${errors.password ? 'invalid' : 'valid'}`
                             : `form-control`}
                        placeholder='Password'
                        name='password'
                        // onChange={onChangeLogin}
                    />
                    <label style={{color: 'black'}}>
                        Password
                    </label>
                    {
                        touched.password && 
                        errors.password &&
                        <small className="ms-2 txt-danger">{ errors.password }</small>
                    }
                </div>
                <div className='col-4' align='right'>
                    <button 
                        type="submit"
                        className='btn btn-warning'
                        disabled={!isValid || !dirty}>
                        Log In
                    </button>
                </div>
            </div>
        </Form>
    )
}

export default LoginPage