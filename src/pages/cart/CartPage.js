import React from 'react'
import { EmptyCart } from './EmptyCart'
import { CartList } from './CartList'
import { useCart } from '../../context'
import { useTitle } from '../../hooks/useTitle'

export const CartPage = () => {

    useTitle("Cart");

    const { cartList } = useCart()

    return (
        <main>
            {cartList.length ? <CartList /> : <EmptyCart />}
        </main>
    )
}
