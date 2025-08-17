import React from 'react'
import { Link } from 'react-router-dom'

export const OrderFail = () => {
    return (
        <div>
            <div className="flex items-center justify-center min-h-screen dark:bg-gray-800 text-white">
                <div className="bg-gray-200 dark:bg-gray-900 p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
                    {/* Success Icon */}
                    <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-600">
                            <i class="bi bi-info-circle-fill text-red-900 text-5xl text-red-600"></i>
                        </div>
                    </div>

                    {/* Order Message */}


                    <p className="mb-1 text-gray-900 dark:text-white">Your Payment is failed.</p>
                    <p className="mb-1 text-gray-900 dark:text-white">
                        Connect  <span className="text-blue-300">(admin@email.com)</span> for more Information.
                    </p>
                    <p className="mb-6 text-gray-900 dark:text-white">Payment ID: <span className="font-medium">xyz_123456789</span></p>

                    {/* Button */}

                    <Link to="/cart" className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md text-white font-medium transition">
                        Continue To Cart 🛒
                    </Link>
                </div>
            </div>
        </div>
    )
}
