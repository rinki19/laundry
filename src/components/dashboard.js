import * as FaIcons from 'react-icons/fa'
import * as CgIcons from 'react-icons/cg'
import * as AiIcons from 'react-icons/ai'

import './dashboard.css'
function Dashboard() {

    return (
        <>
        <div className="header-container">
            <div className='header-inner'>
                <span className='heading'>LAUNDRY MANAGEMENT SYSTEM</span> 
                <FaIcons.FaBars/>
            </div>
            <div className='profile'>
                <CgIcons.CgProfile/>
            </div>
        </div>
        
        <div className='main-container'>
            <div className='menu-bars'>
        
                <ul className='list'>
                    <li className='li-style'><AiIcons.AiFillDashboard/>Dashboard</li>
                    <li className='li-style'><AiIcons.AiFillFolder/>Laundry Request</li>
                    <li className='li-style'><AiIcons.AiFillFolder/>Request-status</li>
                </ul>
            </div>

            <div className='main-body'>
            
            <ul className="breadcrumb">
                <li><a href="/dashboard">Dashboard</a></li>
                <li><a href="/overview">Overview</a></li>
            </ul>
                <div className='status-container'>
                    <div className='request-container'>
                        <span className='status'> 0 New Request</span>
                        <span className='details'>View Details</span>
                    </div>
                    <div className='request-container blue'>
                        <span className='status'> 0 Accept</span>
                        <span className='details'>View Details</span>
                    </div>
                    <div className='request-container green'>
                        <span className='status'> 0 Inprocess</span>
                        <span className='details'>View Details</span>
                    </div>
                    <div className='request-container red'>
                        <span className='status'> 0 Finish</span>
                        <span className='details'>View Details</span>
                    </div>
                </div>
            
               
            
            <div className='table-container'>
                <div className='price-heading'>
                <h1 className='text-center'>Laundry price(per unit)</h1>
                </div>
                <table>
                    <tr>
                        <th class=''>Top wear laundry price</th>
                        <td>12</td>
                    </tr>
                    
                    <tr>
                        <th class=''>Bottom wear laundry price</th>
                        <td>22</td>
                    </tr>

                    <tr>
                        <th class=''>Woolen cloth laundry price</th>
                        <td>20</td>
                    </tr>

                    <tr>
                    <th class=''>Other</th>
                    <td>Other may vary </td>
                    </tr>
                </table>
            </div>
            </div>
            
        </div>
        
            </>
    )

} 
export default Dashboard 