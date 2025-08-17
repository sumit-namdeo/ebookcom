import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <>


            <footer className=" bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow-sm md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="/" className="hover:underline">EBookCom™</Link>.  All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a target='_blank' href='https://github.com/sumit-namdeo/' rel="noreferrer">
                            <i className="cursor-pointer text-2xl bi bi-github mr-4"></i>
                        </a>
                    </li>
                    <li>
                        <a target='_blank' href='https://www.linkedin.com/in/sumit-namdeo/' rel="noreferrer">
                            <i className="cursor-pointer text-2xl bi bi-linkedin"></i>
                        </a>
                    </li>
                </ul>
            </footer>

        </>
    )
}
