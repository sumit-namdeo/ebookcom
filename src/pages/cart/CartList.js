import React, { useState } from 'react'
import { CartCard } from './CartCard'
import { Checkout } from './Checkout'
import { useCart } from '../../context';

export const CartList = () => {

    const [checkout, setCheckout] = useState(false);

    const { cartList, total } = useCart();

    return (
        <main>
            <section>


                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-16 py-3">
                                    <span className="sr-only">Image</span>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product
                                </th>

                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                cartList.map((cartProduct) => (
                                    <CartCard key={cartProduct.id} cartProduct={cartProduct} />
                                ))
                            }

                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                <td className="p-4">
                                    <button onClick={() => setCheckout(!checkout)} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ">Place Order <i className="ml-1 bi bi-plus-lg"></i></button>
                                </td>
                                <td></td>
                                <td className='px-6 py-4 font-semibold text-gray-900 dark:text-white'>Total : ${total}</td>
                                <td></td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </section>
            {checkout && <Checkout total={total} setCheckout={setCheckout} />}
        </main>
    )
}
