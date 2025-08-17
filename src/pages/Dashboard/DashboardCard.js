import React from 'react'
import { OrderItemList } from './OrderItemList'

export const DashboardCard = ({ order }) => {
    return (

        <>
            <div className=" top-0 justify-center items-center w-full ">
                <div className="relative p-4 w-full">

                    <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">

                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200 ">
                            <div className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-600">
                                <span className="font-medium text-gray-900 dark:text-white">
                                    ORDER ID :
                                </span>
                                <span className="text-gray-900 dark:text-white">{order.id}</span>
                            </div>

                        </div>

                        <div className="p-4 md:p-5 space-y-4">


                            <div className="relative overflow-x-auto">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                Product name
                                            </th>

                                            <th scope="col" className="px-6 py-3">
                                                Price
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            order.cartList.map((item) => (
                                                <OrderItemList key={item.id} item={item} />
                                            ))
                                        }

                                    </tbody>
                                </table>
                            </div>

                        </div>

                        <div className=" items-center p-4 md:p-5 border-t border-gray-200 rounded-b  dark:border-gray-600 dark:text-white">
                            <div className="flex items-center justify-end p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600 dark:text-white bg-gray-200 dark:bg-gray-900">
                                <span className="font-medium text-gray-900 dark:text-white mr-4">
                                    Order Total :
                                </span>
                                <span className="text-gray-900 dark:text-white">${order.amount_paid}</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
