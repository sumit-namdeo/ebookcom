import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTitle } from '../hooks/useTitle'
import { toast } from 'react-toastify';
import { register } from '../services/';

export const Register = () => {
    useTitle("Registration");
    const navigate = useNavigate()

    async function handleRegister(e) {

        e.preventDefault();

        try {

            const authDetails = {

                name: e.target.name.value,
                email: e.target.email.value,
                password: e.target.password.value
            }

            const json = await register(authDetails);

            json.accessToken ? navigate("/products") : toast.error(json)

        } catch (error) {

            toast.error(error.message, { position: "top-center", autoClose: false })
        }

    }

    return (
        <>
            <main>
                <section>
                    <form className="max-w-sm mx-auto" onSubmit={handleRegister}>
                        <div className="mb-5">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                            <input type="text" id="name" name='name' className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="John Doe" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" id="email" name='email' className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="name@flowbite.com" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <input type="password" name='password' id="password" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" autoComplete="off" required />
                        </div>

                        <div className="flex items-start mb-5">
                            <div className="flex items-center h-5">
                                <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <Link to="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</Link></label>
                        </div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
                        <Link to="/login" className="ml-4 dark:text-gray-400">Already Registered?</Link>
                    </form>
                </section>
            </main>
        </>
    )
}
