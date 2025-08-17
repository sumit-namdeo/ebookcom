import React from 'react'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({ children }) => {

    const token = JSON.parse(sessionStorage.getItem("ebooktoken"))

    return token ? children : <Navigate to="/login" />
}
