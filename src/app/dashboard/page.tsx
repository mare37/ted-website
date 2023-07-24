'use client'

import "./page.modules.css"
import Sidebar from "../portal_components/Sidebar/Sidebar";
import Mainbar from "../portal_components/Mainbar/Mainbar";
import { useGlobalContext } from "../context/store";


function Dashboard (){

    const {sidebar,setSidebar} = useGlobalContext();

    return <div      className="dashboard">
        <Sidebar/>
        <Mainbar/>

    </div>
}


export default Dashboard;