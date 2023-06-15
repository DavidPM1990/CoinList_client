import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import cryptoDecoration from '../../images/auth-decoration.png';
import cryptoImage from '../../images/cryptoimage.jpg';
import { AuthContext } from '../../context/auth.context';
import UserAxios from '../../services/authAxios';


const Login = () => {

    const navigate = useNavigate();
    const [userlogin, setuserlogin] = useState({});

    const [error, setError] = useState("");


    const loginInstance = new UserAxios()
    const { storeToken, authentication, user } = useContext(AuthContext);

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user])

    const login = (eventHTML) => {
        eventHTML.preventDefault();

        if (!userlogin.email || !userlogin.password) {
            setError("You must fill in all fields");
            return;
        }

        loginInstance.logIn(userlogin).then((response) => {
            storeToken(response.token);
            authentication();

        }).catch(err => {
            if (err.response && err.response.data && err.response.data.errorMessage) {
                setError(err.response.data.errorMessage);
            } else {
                setError('Email or Password Invalid')
            }
        })
    };

    const updateUser = (eventHTML) => {
        const { value, name } = eventHTML.target;
        setuserlogin({ ...userlogin, [name]: value });
    };


    return (
        <>

            <main className="bg-white">

                <div className="relative md:flex">

                    {/* Content */}
                    <div className="md:w-1/2">
                        <div className="min-h-screen h-full flex flex-col after:flex-1">

                            <div className="max-w-sm mx-auto px-4 py-8">
                                <h1 className="text-3xl text-slate-800 font-bold mb-6">Welcome again! ✨</h1>
                                {/* Form */}
                                <form onSubmit={login}>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                                            <input id="email" className="form-input w-full" type="email" name='email' onChange={updateUser} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
                                            <input id="password" className="form-input w-full" type="password" name="password" autoComplete="on" onChange={updateUser} />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between mt-6">
                                        <div className="mr-1">
                                            <Link className="text-sm underline hover:no-underline" to="/olvide-password">Forgot your password?</Link>
                                        </div>
                                        <button
                                            type='submit'
                                            className="bg-blue-500 hover:bg-indigo-600 text-white ml-3 rounded-md hover:cursor-pointer border px-4 py-1"
                                        >
                                            Log In
                                        </button>

                                    </div>

                                    {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

                                </form>
                                {/* Footer */}
                                <div className="pt-5 mt-6 border-t border-slate-200">
                                    <div className="text-sm">
                                        Don´t have account yet? <Link className="font-medium text-indigo-500 hover:text-indigo-600" to="/signup">SignUp</Link>
                                    </div>
                                    {/* Warning */}
                                    <div className="mt-5">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Image */}
                    <div className="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2" aria-hidden="true">
                        <img className="object-cover object-center w-full h-full" src={cryptoImage} width="760" height="1024" alt="Authentication" />
                        <img className="absolute top-1/4 left-0 -translate-x-1/2 ml-8 hidden lg:block" src={cryptoDecoration} width="218" height="224" alt="Authentication decoration" />
                    </div>

                </div>

            </main>

        </>
    )
}

export default Login