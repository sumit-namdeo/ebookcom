import React, { useEffect, useState } from 'react'
import { DashboardEmpty } from './DashboardEmpty'
import { DashboardCard } from './DashboardCard'
import { getUserOrders } from '../../services'
import { useTitle } from '../../hooks/useTitle'
import { toast } from 'react-toastify'

export const DashboardPage = () => {

    useTitle("See your Orders Dashboard")

    const [orders, setOrders] = useState([]);

    useEffect(() => {

        async function fetchOrders() {

            try {

                const data = await getUserOrders();
                setOrders(data)

            } catch (error) {

                toast.error(error.message, { autoClose: false })

            }
        }

        fetchOrders();

    }, [])

    return (
        <main>
            <section>

                {
                    orders.length > 0 && orders.map((order) => (
                        <DashboardCard key={order.id} order={order} />
                    ))
                }

            </section>

            <section>
                {!orders.length && <DashboardEmpty />}
            </section>

        </main>
    )
}
