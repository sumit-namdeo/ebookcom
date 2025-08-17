import React from 'react'
import { Link } from 'react-router-dom'
import ProductImage from '../../assets/product-1.jpg';
import { useCart } from '../../context';

export const CartCard = ({ cartProduct }) => {

    const { removeFromCart } = useCart();

    const { id, name, price, poster } = cartProduct;

    return (
        <>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4">
                    <Link to={`/products/${id}`}>
                        <img src={poster} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = ProductImage;
                        }} />
                    </Link>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    <Link to={`/products/${id}`}>
                        {name}
                    </Link>
                </td>

                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {price}
                </td>
                <td className="px-6 py-4">

                    <button onClick={() => removeFromCart(cartProduct)} className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</button>
                </td>
            </tr>


        </>
    )
}
