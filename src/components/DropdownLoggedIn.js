import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getUser, logout } from '../services';
import { toast } from 'react-toastify';

export const DropdownLoggedIn = ({ setUserDropdown }) => {

    const navigate = useNavigate();
    const [user, setUser] = useState()

    useEffect(() => {

        async function fetchUserData() {

            const data = await getUser();

            try {

                if (data?.email) {

                    setUser(data)

                } else {

                    handleLogOut();
                }
            } catch (error) {

                toast.error(error.message, { autoClose: false })
            }
        }

        fetchUserData();

    },)

    function handleLogOut() {
        logout()
        setUserDropdown(false)
        navigate("/")
    }


    return (
        <>
            <div id="dropdown" className="select-none absolute top-15 right-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">

                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li className='mb-2'>{user?.email}</li>
                    <hr />
                    <li>
                        <Link onClick={() => setUserDropdown(false)} to="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                    </li>

                    <li>
                        <Link to="/products" onClick={() => setUserDropdown(false)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All Ebooks</Link>
                    </li>

                    <li>
                        <button onClick={handleLogOut} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logout</button>
                    </li>
                </ul>
            </div>

        </>
    )
}
