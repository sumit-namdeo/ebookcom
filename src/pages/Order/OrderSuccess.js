import React from 'react'
import { Link } from 'react-router-dom'

export const OrderSuccess = ({ data }) => {

    return (
        <div>
            <div className="flex items-center justify-center min-h-screen dark:bg-gray-800 text-white">
                <div className="bg-gray-200 dark:bg-gray-900 p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
                    {/* Success Icon */}
                    <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2.5"
                                stroke="white"
                                className="w-10 h-10"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    </div>

                    {/* Order Message */}
                    <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                        Thank you <span className="text-blue-400">{data.user.name}</span> for order!
                    </h2>
                    <p className="mb-1 text-gray-900 dark:text-white">Your Order ID: <span className="font-medium">{data.id}</span></p>
                    <p className="mb-1 text-gray-900 dark:text-white">Your order is confirmed.</p>
                    <p className="mb-1 text-gray-900 dark:text-white">
                        Please check your mail <span className="text-blue-300">{data.user.email}</span> for the eBook.
                    </p>
                    <p className="mb-6 text-gray-900 dark:text-white">Payment ID: <span className="font-medium">xyz_123456789</span></p>

                    {/* Button */}

                    <Link to="/products" className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md text-white font-medium transition">
                        Continue Shopping 🛒
                    </Link>
                </div>
            </div>
        </div>
    )
}
