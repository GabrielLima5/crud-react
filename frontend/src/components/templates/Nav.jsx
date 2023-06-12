import React from 'react'
import './nav.css'
import NavItem from '../templates/NavItem'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem icon="home" title="Início" />
            <NavItem icon="users" title="Usuários" users />
        </nav>
    </aside>