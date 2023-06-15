import React from 'react';
import { Link } from 'react-router-dom';
import cryptoDecoration from '../../images/auth-decoration.png'
import cryptoImage from '../../images/cryptoimage.jpg';

import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import UserAxios from '../../services/authAxios';


function Signup() {

    const navigate = useNavigate();
    const [newUser, setNewUser] = useState({});
    const userInstance = new UserAxios();

    const [error, setError] = useState("");

    const createNewUser = (eventHTML) => {
        eventHTML.preventDefault();

        if (!newUser.email || !newUser.userName || !newUser.fullName || !newUser.phoneNumber || !newUser.password) {
            setError("You must fill in all fields")
            return;
        }

        console.log(newUser)
        userInstance.signUp(newUser).then(() => {
            navigate('/')
        })
            .catch(err => {
                if (err.response && err.response.data && err.response.data.errorMessage) {
                    setError(err.response.data.errorMessage);
                } else {
                    setError('Email or Password Invalid')
                }
            })
    }

    const updateNewUser = (eventHTML) => {
        const { name, value } = eventHTML.target;
        setNewUser({ ...newUser, [name]: value });
    };





    return (
        <main className="bg-white">

            <div className="relative md:flex">

                {/* Content */}
                <div className="md:w-1/2">
                    <div className="min-h-screen h-full flex flex-col after:flex-1">
                        <div className="max-w-sm mx-auto px-4 py-8">
                            <h1 className="text-3xl text-slate-800 font-bold mb-6">Create your Account ✨</h1>
                            {/* Form */}
                            <form onSubmit={createNewUser}>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="email">Email Address <span className="text-rose-500">*</span></label>
                                        <input id="email" className="form-input w-full" type="email" name="email" onChange={updateNewUser} />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="userName">User Name <span className="text-rose-500">*</span></label>
                                        <input id="userName" className="form-input w-full" type="text" name="userName" onChange={updateNewUser} />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="fullName">Full Name <span className="text-rose-500">*</span></label>
                                        <input id="fullName" className="form-input w-full" type="text" name="fullName" onChange={updateNewUser} />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="phoneNumber">Phone Number <span className="text-rose-500">*</span></label>
                                        <input id="phoneNumber" className="form-input w-full" type="number" name="phoneNumber" onChange={updateNewUser} />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
                                        <input id="password" className="form-input w-full" type="password" autoComplete="on" name="password" onChange={updateNewUser} />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <button className="bg-blue-500 hover:bg-indigo-600 text-white mt-3 rounded-md hover:cursor-pointer border px-4 py-1" to="/" type='submit'>Sign Up</button>
                                </div>

                                {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

                            </form>
                            {/* Footer */}
                            <div className="pt-2 mt-2 border-t border-slate-200">
                                <div className="text-sm">
                                    Have an account? <Link className="font-medium text-indigo-500 hover:text-indigo-600" to="/login">LogIn</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Image */}
                <div className="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2" aria-hidden="true">
                    <img className="object-cover object-center w-full h-full"
                        src={cryptoImage}
                        width="760" height="1024" alt="crypto Image" />
                    <img className="absolute top-1/4 left-0 -translate-x-1/2 ml-8 hidden lg:block"
                        src={cryptoDecoration}
                        width="218" height="224" alt="Image decoration" />
                </div>

            </div>

        </main>
    );
}

export default Signup;