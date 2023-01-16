import React from 'react'
import * as AiIcons from 'react-icons/ai'


export const Sidebar = [ 
    
    {
        title: 'Dashboard',
        className: 'menu-items',
        path: '/dashboard',
        icon: <AiIcons.AiFillDashboard/>
    },
    {
        title: 'Laundry Request',
        className: 'menu-items',
        path: '/laundry',
        icon: <AiIcons.AiFillFolder/>
    },
    {
        title: 'Request Status',
        className: 'menu-items',
        path: '/request',
        icon: <AiIcons.AiFillFolder/>
    }

    
]
export default Sidebar
