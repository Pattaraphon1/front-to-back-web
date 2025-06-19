import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import Register from '../pages/auth/Register'
import Login from '../pages/auth/Login'
import DashBoard from '../pages/admin/DashBoard'
import Manage from '../pages/admin/Manage'
import Layout from '../layouts/Layout'
import LayoutAdmin from '../layouts/LayoutAdmin'
import About from '../pages/About'

function AppRouter() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
      </Route>

      {/* Private */}
      <Route path="admin" element={<LayoutAdmin />}>
        <Route index element={<DashBoard />} />
        <Route path='manage' element={<Manage />} />
      </Route>

    </Routes>
  )
}

export default AppRouter
