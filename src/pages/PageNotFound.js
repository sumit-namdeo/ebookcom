import React from 'react'
import { Link } from 'react-router-dom'

export const PageNotFound = () => {
    return (
        <main>
            <section>


                <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h2><i class="bi bi-ban text-5xl dark:text-white mb-4"></i></h2>
                    <h5 className="mt-4 mb-2 text-3xl font-bold text-gray-900 dark:text-white">Page Not Found</h5>
                    <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">OOPs the page you are looking is not found</p>
                    <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">

                        <Link to="/products" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focusu:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                            <i class="bi bi-arrow-right-circle text-3xl mr-3"></i>
                            <div className="text-left rtl:text-right">
                                <div className="-mt-1 font-sans text-sm font-semibold">All Products</div>
                            </div>
                        </Link>
                    </div>
                </div>

            </section>
        </main>
    )
}
