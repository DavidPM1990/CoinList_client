import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import cryptoDecoration from '../../images/auth-decoration.png';
import cryptoImage from '../../images/cryptoimage.jpg';
import { AuthContext } from '../../context/auth.context';
import UserAxios from '../../services/authAxios';




const Login = () => {

    const navigate = useNavigate();
    const [userlogin, setuserlogin] = useState({});

    const loginInstance = new UserAxios()
    const { storeToken, authentication, user } = useContext(AuthContext);

    useEffect(() => {
        console.log('supuestamente soy el usuarioooooo', user)
        if (user) {
            navigate('/')
        }
    }, [user])

    const login = (eventHTML) => {
        eventHTML.preventDefault();
        loginInstance.logIn(userlogin).then((response) => {
            storeToken(response.token);
            authentication();

        }).catch(err => console.log(err))
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

                            {/* Header */}
                            {/* <div className="flex-1">
                                <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8 mt-5">
                                    <Link className="block" to="/">
                                        <img width="128" height="128" viewBox="0 0 32 32" />
                                    </Link>
                                </div>
                            </div> */}

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
                                        <input
                                            type="submit"
                                            value="Log In"
                                            className="btn bg-blue-500"
                                        />
                                        {/* <Link className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3 hover:cursor-pointer" to="/">Iniciar sesión</Link> */}
                                    </div>
                                </form>
                                {/* <div className='pt-5'>
                                    {msg && <Alerta alerta={alerta} />}

                                </div> */}
                                {/* Footer */}
                                <div className="pt-5 mt-6 border-t border-slate-200">
                                    <div className="text-sm">
                                        Don´t have account yet? <Link className="font-medium text-indigo-500 hover:text-indigo-600" to="/signup">SignUp</Link>
                                    </div>
                                    {/* Warning */}
                                    <div className="mt-5">
                                        {/* <div className="bg-amber-100 text-amber-600 px-3 py-2 rounded">
                                            <svg className="inline w-3 h-3 shrink-0 fill-current mr-2" viewBox="0 0 12 12">
                                                <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                                            </svg>
                                            <span className="text-sm">
                                                To support you during the pandemic super pro features are free until March 31st.
                                            </span>
                                        </div> */}
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









            {/* <h1 className="text-sky-600 font-black text-6xl capitalize mt-5 ml-5">Entra en tu Cuenta y Administra tus {''}
                <span className="text-slate-700">proyectos</span>
            </h1>

            <main className='container mx-auto mt-5 md:mt-2 p-5 md:flex md:justify-center'>
                <div className='md:w-2/3 lg:w-2/5 '>
                    <form
                        className="my-10 bg-white shadow rounded-lg p-10"
                        onSubmit={handleSubmit}
                    >
                        <div className="max-w-lg sm:mx-auto sm:text-center">
                            <a href="/">
                                <img src={Logo} className="w-40 sm:mx-auto" />
                                <p className="leading-relaxed mt-2 text-xl font-bold">
                                    Accede a la plataforma
                                </p>
                            </a>
                        </div>

                        {msg && <Alerta alerta={alerta} />}

                        <div className="my-5">

                            <label
                                className="leading-relaxed mt-2 text-m font-bold"
                                htmlFor="email"
                            >Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Email de Registro"
                                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="my-5">
                            <label
                                className="leading-relaxed mt-2 text-m font-bold"
                                htmlFor="password"
                            >Password</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Password de Registro"
                                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>

                        <input
                            type="submit"
                            value="Iniciar Sesión"
                            className="bg-flagx mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-teal-300 transition-colors"
                        />

                    </form>

                    <nav className="lg:flex lg:justify-between">
                        <Link
                            className='block text-center my-5 text-slate-500 uppercase text-sm'
                            to="/registrar"
                        >¿No tienes una cuenta? Regístrate</Link>

                        <Link
                            className='block text-center my-5 text-slate-500 uppercase text-sm'
                            to="/olvide-password"
                        >Olvide Mi Password</Link>
                    </nav>
                </div>

            </main> */}

        </>
    )
}

export default Login




