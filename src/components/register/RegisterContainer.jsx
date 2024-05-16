
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import RegisterForm from './registerForm'


const RegisterContainer = () => {

    const port = 8080
    const navigate = useNavigate()
    const [registration, setRegistration] = useState({
        name: '',
        email: '',
        password: ''
    })
    console.log(registration)

    const handleChange = (e) => {
        setRegistration({ ...registration, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:${port}/api/users/register`, registration)
            .then(response => {
                console.log(response)
                navigate('/dashboard')

            })
            .catch(error => {
                console.log(error)
            })
        setRegistration({
            name: '',
            email: '',
            password: ''
        })
    }


    return (
        <RegisterForm registration={registration} handleChange={handleChange} handleSubmit={handleSubmit} />
    )
}

export default RegisterContainer