import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Auth = () => {
    const token = true
  return (
    token ? 
    <Outlet/>
    : 
    <Navigate replace to={"/login"}/>
  )
}

export default Auth