import React from 'react'
import {Route,Routes} from 'react-router-dom'
import UserForm from '../pages/UserForm'
import UserGrid from '../pages/UserGrid'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<UserForm />}></Route>
        <Route path='/grid' element={<UserGrid />}></Route>
    </Routes>
  )
}

export default AllRoutes