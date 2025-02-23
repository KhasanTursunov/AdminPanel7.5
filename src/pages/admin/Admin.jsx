import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Admin = () => {
	return (
    <div className="flex">
      <div className="admin_wrapper w-80 bg-blue-900 text-white p-16 justify-between flex flex-col">
        <p className="text-2xl font-bold">Admin Dashboard </p>
        <ul className="admin_ul my-6 text-xl  flex-1 flex flex-col gap-4 mr-5">
          <li className="px-8 py-2 rounded active:bg-blue-600 ">
            <NavLink to="cars" className="block py-2 indent-1 ">
              Cars
            </NavLink>
          </li>
          <li className="px-8 py-2 rounded active:bg-blue-600 ">
            <NavLink to="createcar" className="block py-2 indent-1 ">
              Create Car
            </NavLink>
          </li>
          <li className="px-8 py-2 rounded active:bg-blue-600 ">
            <NavLink to="documents" className="block py-2 indent-1 ">
              Car Inventory
            </NavLink>
          </li>
          <li className="px-8 py-2 rounded active:bg-blue-600 ">
            <NavLink to="employees" className="block py-2 indent-1 ">
              Sales
            </NavLink>
          </li>
          <li className="px-8 py-2 rounded active:bg-blue-600 ">
            <NavLink to="orders" className="block py-2 indent-1 ">
              Customers
            </NavLink>
          </li>
          <li className="px-8 py-2 rounded active:bg-blue-600 ">
            <NavLink to="payments" className="block py-2 indent-1 ">
              Payments
            </NavLink>
          </li>
        
         
          <li className="px-8 py-2 rounded active:bg-blue-600 ">
            <NavLink to="notification" className="block py-2 indent-1 ">
              Notifications
            </NavLink>
          </li>
        </ul>
        <Link to={"/"}>
          <div className="block w-full bg-red-500 rounded cursor-pointer text-center">
            <button className="py-2">Log out</button>
          </div>
        </Link>
      </div>
      <div className="flex min-h-screen flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
}

export default Admin
