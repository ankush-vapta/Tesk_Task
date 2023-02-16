import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import './Loginpage.css'
import { DataContext } from '../context/DataProvider'
import { Navigate, useNavigate } from 'react-router';
import movieicon from '../image/movieIcon.jpg'

const Login = ({ isUserAuth }) => {

   // const imageUrl = "https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000"
    const imgStyle = {
        width: "300px",
        display: "flex",
        margin: "auto"
    }

    const loginInitialValues = {
        username: "",
        password: ""
    }
    const signupInitialValues = {
        name: "",
        username: "",
        password: ""
    }

    const [account, toggleAccount] = useState(true)
    const [login, setLogin] = useState(loginInitialValues);
    const [signup, setSignup] = useState(signupInitialValues);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const { setAccount } = useContext(DataContext);

    function toggleSignUp(e) {
        e.preventDefault()

        if (account === true) {
            toggleAccount(false)
        }
        else {
            toggleAccount(true)
        }
    }

    function onValueChange(e) {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }

    function onInputChange(e) {
        setSignup({ ...signup, [e.target.name]: e.target.value })
    }

    const baseUrl = 'http://localhost:8800/signup'
    async function signupUser(e) {
      e.preventDefault()
      await axios.post(baseUrl, signup)
        .then(function (response) {
          console.log(response);
          setSignup(signupInitialValues);
          setError("")
          toggleAccount(true)
        })
        .catch(function (error) {
          console.log(error);
          setError("SomeThing Went Wrong")
        });
      console.log(signup)
    }
   
    const loginUrl = 'http://localhost:8800/login'
    async function handleOnClick(e) {
      e.preventDefault()
      await axios.post(loginUrl, login)
        .then(function (response) {
          console.log(response.data);
          setLogin(loginInitialValues);
          setError("")
          toggleAccount(true)
          sessionStorage.setItem("accessToken", `${response.data.accessToken}`)
          sessionStorage.setItem("refreshToken", `${response.data.refreshToken}`)
          setAccount({ name: response.data.name, username: response.data.username })
          isUserAuth(true);
          navigate('/')
        })
        .catch(function (error) {
          console.log(error);
          setError("SomeThing Went Wrong")
        });
    }

    return (
        <>
            <div className="container-fluid" id='main_container'>
                <div className="col-md-6" id='container1'>
                    <img src={movieicon} style={imgStyle} alt=" not ound" />
                    <div className="container">
                        {account === true ? <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>USERNAME</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="username" onChange={(e) => onValueChange(e)} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" onChange={(e) => onValueChange(e)} />
                            </Form.Group>
                            <div className=' d-flex flex-column '>
                                <Button variant="primary" type="submit" onClick={(e) => handleOnClick(e)}> Login </Button>
                                <span className='  d-flex d-flex justify-content-center' >or</span>
                                <Button variant="secondary" type="submit" onClick={(e) => toggleSignUp(e)}> SignUp</Button>
                            </div>
                            <div>
                            </div>
                        </Form>
                            :
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label >Enrer Your Name</Form.Label>
                                    <Form.Control type="name" placeholder="Enter name" name="name" onChange={(e) => onInputChange(e)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label >Enrer Your UserName</Form.Label>
                                    <Form.Control type="name" placeholder="Enter UserName" name="username" onChange={(e) => onInputChange(e)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" name="password" onChange={(e) => onInputChange(e)} />
                                </Form.Group>
                                <div className='d-flex flex-column'>
                                    <Button variant="primary" type="submit" onClick={(e) => signupUser(e)}> SignUp </Button>
                                    <span className='d-flex d-flex justify-content-center' >or</span>
                                    <Button variant="secondary" type="submit" onClick={(e) => toggleSignUp(e)}> Already Have An Account</Button>
                                </div>
                            </Form>}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;