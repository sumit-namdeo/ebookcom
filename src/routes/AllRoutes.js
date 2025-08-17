import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage, ProductDetails, ProductList, Login, Register, CartPage, DashboardPage, OrderPage, PageNotFound } from '../pages/Index'
import { ProtectedRoute } from './ProtectedRoute'

export const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/products' element={<ProductList />} />
                <Route path='/products/:id' element={<ProductDetails />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/cart' element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
                <Route path='/dashboard' element={<ProtectedRoute> <DashboardPage /> </ProtectedRoute>} />
                <Route path='/order-summary' element={<ProtectedRoute> <OrderPage /> </ProtectedRoute>} />

                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </>
    )
}
