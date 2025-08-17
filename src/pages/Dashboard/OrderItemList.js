import React from 'react'

export const OrderItemList = ({ item }) => {
    return (
        <>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.name}
                </th>

                <td className="px-6 py-4">
                    {item.price}
                </td>
            </tr>
        </>
    )
}
