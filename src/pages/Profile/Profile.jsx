import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth.context";
// import { useParams } from 'react-router-dom'
import axios from "axios";



const Profile = () => {


    const { user } = useContext(AuthContext);


    const [userName, setUserName] = useState(user.userName);
    const [fullName, setFullName] = useState(user.fullName);
    const [email, setEmail] = useState(user.email);
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);



    const updateUser = async () => {
        try {
            const token = localStorage.getItem('tokenAuth');


            const response = await axios.put(
                `http://localhost:5005/auth/users/${user._id}`, // Preguntar a David porque si pongo /auth/users/${users._id}, no funciona???????? 
                {
                    userName,
                    fullName,
                    email,
                    phoneNumber
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            console.log('esta es la respuesta', response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {

    }, []);


    return (
        <div className="grow">
            {/* Panel body */}
            <div className="p-6 m-6 space-y-6 bg-white">
                <h2 className="text-2xl text-slate-800 font-bold mb-5">My Account</h2>
                {/* Picture */}
                <section>
                    <div className="flex items-center">
                        {/* <div className="mr-4">
                            <img className="w-20 h-20 rounded-full" src={Image} width="80" height="80" alt="User upload" />
                        </div> */}
                        <button className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">Change</button>
                    </div>
                </section>
                {/* Business Profile */}
                <section>
                    <h2 className="text-xl leading-snug text-slate-800 font-bold mb-1">Profile</h2>
                    <form>
                        <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
                            <div className="sm:w-1/3">
                                <label className="block text-sm font-medium mb-1" htmlFor="name">User Name</label>
                                <input
                                    id="userName"
                                    className="form-input w-full"
                                    type="text"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)} />
                            </div>
                            <div className="sm:w-1/3">
                                <label className="block text-sm font-medium mb-1" htmlFor="name">Full Name</label>
                                <input
                                    id="fullName"
                                    className="form-input w-full"
                                    type="text"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                />
                            </div>
                            <div className="sm:w-1/3">
                                <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    className="form-input w-full"
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="sm:w-1/3">
                                <label className="block text-sm font-medium mb-1" htmlFor="location">Phone Number</label>
                                <input
                                    id="number"
                                    className="form-input w-full"
                                    type="number"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)} />
                            </div>
                        </div>
                    </form>
                </section>
                {/* Password */}
                <section>
                    <h2 className="text-xl leading-snug text-slate-800 font-bold mb-1">Password</h2>
                    <div className="text-sm">Change your password right here.</div>
                    <div className="mt-5">
                        <button className="btn border-slate-200 shadow-sm text-indigo-500">Set New Password</button>
                    </div>
                </section>
            </div>
            {/* Panel footer */}
            <footer>
                <div className="flex flex-col px-6 py-5 border-t border-slate-200">
                    <div className="flex self-end">
                        <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3" onClick={() => updateUser()}>Save Changes</button>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Profile