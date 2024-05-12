import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'




const Profile = () => {
    const { id } = useParams()
    const [user, setUser] = useState({})
    console.log("Profile: user: ", user)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:8080/api/users/profile/${id}`).then((res) => {
            setUser(res.data)
            setLoading(false)
        }).catch(err => console.log(err))
    }, [])


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{user.email}</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Profile