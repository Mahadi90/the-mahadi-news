import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavigationBAr from '../pages/NavigationBAr';

const Login = () => {
    return (
        <div className='bg-dark pb-5'>
            <NavigationBAr></NavigationBAr>
            <Form className='w-50 mx-auto bg-white my-3 px-5 py-3 rounded'>
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