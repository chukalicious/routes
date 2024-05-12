import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Hello there</h1>
                    <p className="py-6">Join Our Cult! <span className='text-3xl mx-2'>🎁</span></p>
                    <Link to="register"><button className="btn btn-primary">Register! <span className='text-3xl mx-2'>🔗</span></button></Link>

                </div>
            </div>
        </div>
    )
}

export default Home