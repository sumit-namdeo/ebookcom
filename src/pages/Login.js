import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTitle } from '../hooks/useTitle'
import { toast } from 'react-toastify'
import { login } from '../services'

export const Login = () => {

    useTitle("Login")

    const navigate = useNavigate();

    const email = useRef();
    const password = useRef();

    async function handleLogin(e) {

        e.preventDefault();

        try {

            const authDetails = {
                email: email.current.value,//e.target.email.value,
                password: password.current.value, //e.target.password.value
            }

            const json = await login(authDetails)

            json.accessToken ? navigate('/products') : toast.error(json)

        } catch (error) {

            toast.error(error.message, { position: "top-center", autoClose: false })
        }

    }

    return (
        <>

            <main>
                <section>
                    <form className="max-w-sm mx-auto" onSubmit={handleLogin}>
                        <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input ref={email} type="email" id="email" name='email' className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="name@flowbite.com" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <input ref={password} type="password" id="password" name='password' className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
                        </div>

                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>

                        <Link to="/register" className="ml-4 dark:text-gray-400">Don't have account?</Link>
                    </form>
                </section>
            </main>
        </>
    )
}
