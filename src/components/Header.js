import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search } from './Search';
import { DropDownLoggedOut } from './DropDownLoggedOut';
import { DropdownLoggedIn } from './DropdownLoggedIn';
import { useCart } from '../context';

export const Header = () => {

    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('ebooktheme')) || false);
    const [searchSection, setSearchSection] = useState(false);
    const [userDropdown, setUserDropdown] = useState(false);
    const userToken = JSON.parse(sessionStorage.getItem("ebooktoken"));
    const { cartList } = useCart();


    useEffect(() => {

        localStorage.setItem('ebooktheme', JSON.stringify(darkMode))

        if (darkMode) {

            document.documentElement.classList.add("dark")

        } else {

            document.documentElement.classList.remove("dark")

        }

    }, [darkMode])

    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Ebook Com Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">EBook Com</span>
                    </Link>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <span>
                            <i className="cursor-pointer bi text-2xl bi-paint-bucket dark:text-slate-300" onClick={() => setDarkMode(!darkMode)}></i>
                        </span>
                        <span>
                            <i onClick={() => setSearchSection(!searchSection)} className="cursor-pointer bi text-2xl bi-search dark:text-slate-300"></i>
                        </span>
                        <span className='relative'>
                            <Link to="/cart">
                                <i className="cursor-pointer bi text-2xl bi-bag-check-fill dark:text-slate-300"></i>
                                <span className="rounded-full -top-1 left-2.5 bg-rose-500 px-1 text-sm absolute">{cartList.length}</span>
                            </Link>
                        </span>
                        <span><i onClick={() => setUserDropdown(!userDropdown)} className="cursor-pointer bi text-2xl bi-person-circle dark:text-slate-300"></i></span>
                    </div>
                </div>
            </nav>

            {searchSection && (<Search setSearchSection={setSearchSection} />)}

            {userDropdown && (userToken ? <DropdownLoggedIn setUserDropdown={setUserDropdown} /> : <DropDownLoggedOut setUserDropdown={setUserDropdown} />)}


        </>
    )
}
