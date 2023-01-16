import './Navbar.css'
import React,{useState} from 'react'
import * as FaIcons from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Sidebar from './Sidebar'


function Navbar() {
    const {sidebar,setSidebar} = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
        <div className='navbar'>
            Laundry Management System
            <Link to="#" className="Menu-bars">
                <FaIcons.FaBars onClick={showSidebar}/>
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : "nav-menu"}>
            <ul className='nav-menu-items'>
                <li className='nav-toggle'>
                    <Link></Link>
                </li>
                {Sidebar.map((item,index) => {
                    return (
                        <li key={index} className={item.className}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </>
    )

}
export default Navbar 