import React, {useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavigationBAr from '../pages/NavigationBAr';
import { AuthContext } from '../providers/AuthProvider';

const Register = () => {

    const { createUser } = useContext(AuthContext)
    const [accepted, setAccepted] = useState(false)

    const handleAcceptBtn = e => {
        setAccepted(e.target.checked)
    }

    const handleRegister = e =>{
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password)

        createUser(email, password)
        .then(result => {
            const loggededUser = result.user;
            console.log(loggededUser)
        })
        .catch(error => {
            console.log(error)
        })
}
    return (
        <div className='bg-info pb-5'>
            <NavigationBAr></NavigationBAr>
            <Form onSubmit={handleRegister} className='w-50 mx-auto bg-white my-3 px-5 py-3 rounded'>
                <h2 className='text-center my-2'>Register your account</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control type="text" name='photo' placeholder="Enter Photo URL" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check onClick={handleAcceptBtn} type="checkbox" label="Accept our terms and condition" />
      </Form.Group>
      <Button className='w-100' disabled={!accepted} variant="dark" type="submit">
        Register
      </Button>
      <p className='text-center'><small>Already have an account? please <Link className='text-danger' to='/login'>Login</Link></small></p>
    </Form>
        </div>
    );
};

export default Register;