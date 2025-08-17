import React, { useEffect, useState } from 'react'
import { useCart } from '../../context';
import { useNavigate } from 'react-router-dom';
import { getUser, createOrder } from '../../services';
import { toast } from 'react-toastify';

export const Checkout = ({ setCheckout }) => {

    const [user, setUser] = useState({});
    const { cartList, total, clearCart } = useCart();
    const navigate = useNavigate();


    useEffect(() => {
        async function fetchUser() {

            try {

                const json = await getUser();
                setUser(json)

            } catch (error) {

                toast.error(error.message, { autoClose: false })
            }
        }
        fetchUser()
    }, [])


    async function handleSubmit(e) {

        e.preventDefault();

        try {

            const data = await createOrder(cartList, total, user)
            clearCart();
            navigate("/order-summary", { state: { status: data.id ? true : false, data: data } })

        } catch (error) {

            navigate("/order-summary", { state: { status: false } })
        }

    }

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-gray-800 rounded-lg shadow-lg w-96 p-6">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-semibold text-white flex items-center space-x-2">
                            <span>💳</span>
                            <span>CARD PAYMENT</span>
                        </h2>
                        <button onClick={() => setCheckout(false)} className="text-gray-400 hover:text-white">✕</button>
                    </div>

                    <form onSubmit={handleSubmit}>
                        {/* Name */}
                        <label className="block text-sm text-gray-300 mb-1">Name:</label>
                        <input
                            type="text"
                            value={user.name || ""}
                            readOnly
                            className="w-full mb-4 p-2 rounded bg-gray-700 text-white outline-none"
                        />

                        {/* Email */}
                        <label className="block text-sm text-gray-300 mb-1">Email:</label>
                        <input
                            type="email"
                            value={user.email || ""}
                            readOnly
                            className="w-full mb-4 p-2 rounded bg-gray-700 text-white outline-none"
                        />

                        {/* Card Number */}
                        <label className="block text-sm text-gray-300 mb-1">Card Number:</label>
                        <input
                            type="text"
                            value="4215625462597845"
                            readOnly
                            className="w-full mb-4 p-2 rounded bg-gray-700 text-white outline-none"
                        />

                        {/* Expiry Date */}
                        <label className="block text-sm text-gray-300 mb-1">Expiry Date:</label>
                        <div className="flex space-x-2 mb-4">
                            <input
                                type="text"
                                value="03"
                                readOnly
                                className="w-1/2 p-2 rounded bg-gray-700 text-white outline-none"
                            />
                            <input
                                type="text"
                                value="27"
                                readOnly
                                className="w-1/2 p-2 rounded bg-gray-700 text-white outline-none"
                            />
                        </div>

                        {/* Security Code */}
                        <label className="block text-sm text-gray-300 mb-1">Security Code:</label>
                        <input
                            type="text"
                            value="523"
                            readOnly
                            className="w-full mb-4 p-2 rounded bg-gray-700 text-white outline-none"
                        />

                        {/* Price */}
                        <p className="text-center text-green-400 text-lg font-bold mb-4">${total}</p>

                        {/* Pay Now Button */}
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded flex items-center justify-center space-x-2">
                            <span>🔒</span>
                            <span>PAY NOW</span>
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}
