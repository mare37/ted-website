import "./Sidebar.modules.css"
import Link from "next/link";
import { useGlobalContext } from "@/app/context/store";
import { useEffect } from "react";

const links = [
    {
        id:1,
        href: "/dashboard",
        link: "Dashboard"
    },
    {
        id:2,
        href: "/journal-list",
        link: "Journal"
    },
    {
        id:3,
        href: "/stories",
        link: "Stories"
    },
    {
        id:4,
        href: "/settings",
        link: "Settings"
    },
]





function Sidebar(){

    const {sidebar,setSidebar} = useGlobalContext();
  
    useEffect(()=>{
        console.log(sidebar);
        

    },[sidebar])
    

    return <div className={sidebar ? "sidebar": "sidebar remove-sidebar"}   >

         <img  onClick={()=>{setSidebar((prev: boolean)=>{ console.log(prev);
         return !prev})    }}   src="./cancel.png"   />


        <div>
                
                {links.map((link)=>{

                    return  <p><Link    onClick={()=>{setSidebar((prev: boolean)=>{ console.log(prev);
                        return !prev})    }}    href={link.href}>{link.link}</Link>   </p>  

                })}


       



        </div>
         

    </div>
}


export default Sidebar