'use client'

import "./page.modules.css"
import Sidebar from "../portal_components/Sidebar/Sidebar";
import Mainbar from "../portal_components/Mainbar/Mainbar";
import { useGlobalContext } from "../context/store";
import { useEffect } from "react";


function Dashboard (){

    const {sidebar,setSidebar,setPopup} = useGlobalContext();


    useEffect(()=>{
        setPopup(false)
    },[])

    return <div      className="dashboard">
        <Sidebar/>
        <Mainbar/>

    </div>
}


export default Dashboard;