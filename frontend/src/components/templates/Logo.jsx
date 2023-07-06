import React from 'react'
import './logo.css'
import logo from '../../assets/images/mylogo.png'
import { Link } from 'react-router-dom'

export default () =>
   <aside className="logo">
      <Link to="/" className="logo">
         <img src={logo} alt="Logo" />
      </Link>
   </aside>