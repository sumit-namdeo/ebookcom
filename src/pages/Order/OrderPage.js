import React from 'react'
import { OrderSuccess } from './OrderSuccess';
import { OrderFail } from './OrderFail';
import { useLocation } from 'react-router-dom';

export const OrderPage = () => {

    const { state } = useLocation();

    return (
        <main>
            <section>
                {state.status ? <OrderSuccess data={state.data} /> : <OrderFail />}
            </section>
        </main>

    )
}
