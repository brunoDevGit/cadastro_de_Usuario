import React from 'react'
import './Logo.css'
import { Link } from 'react-router-dom'
export default props =>

    <aside className="logo">
        <Link to="/" className="logo">

            <i className={`logoStyle fa fa-${props.icon}`}></i>
        </Link>
    </aside>