import React from 'react'
import { Link } from 'react-router-dom'

export const DropDownLoggedOut = ({ setUserDropdown }) => {
    return (
        <>
            <div id="dropdown" className="select-none absolute top-15 right-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">

                    <li>
                        <Link to="/login" onClick={() => setUserDropdown(false)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Login</Link>
                    </li>
                    <li>
                        <Link to="/register" onClick={() => setUserDropdown(false)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Registration</Link>
                    </li>
                    <li>
                        <Link to="/products" onClick={() => setUserDropdown(false)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All Ebooks</Link>
                    </li>
                </ul>
            </div>

        </>
    )
}
