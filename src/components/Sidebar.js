import React from 'react'
import {links} from './data'
import { useGlobalContext } from './context'
const Sidebar = () => {
    const {isSidebarOpen, closeSidebar} = useGlobalContext()
    return (
        <div className={`${isSidebarOpen ?'sidebar show-sidebar' : 'sidebar'}`}>
           <button onClick={closeSidebar}>close sidebar</button>
            {links.map((link)=>{
                const {id, url, text} = link;
               return (
                   <ul>
                       <a href={url} key={id}>{text}</a>
                   </ul>
               )
            })}
        </div>
    )
}

export default Sidebar;