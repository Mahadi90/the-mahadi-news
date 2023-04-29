import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavigationBAr from '../pages/NavigationBAr';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {

   const { signIn } = useContext(AuthContext)

   const handleSignIn = e => {
        e.preventDefault()

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password)
    signIn(email, password)
    .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
    })
    .catch(error => {
        console.log(error)
    })
   }

    return (
        <div className='bg-info pb-5'>
            <NavigationBAr></NavigationBAr>
            <Form onSubmit={handleSignIn} className='w-50 mx-auto bg-white my-3 px-5 py-3 rounded'>
                <h2 className='text-center my-2'>Login your account</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Accept our terms and condition" />
      </Form.Group>
      <Button className='w-100' variant="dark" type="submit">
        Login
      </Button>
      <p className='text-center'><small>Don't have an account? please <Link className='text-danger' to='/register'>Register</Link></small></p>
    </Form>
        </div>
    );
};

export default Login;