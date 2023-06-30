"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from 'next/navigation'
import  "./Navbar.modules.css"


const links = [
    {
        id:1,
        href: "/save-the-environment",
        link: "Save The Environment"
    },
    {
        id:2,
        href: "/get-involved",
        link: "Get Involved"
    },
    {
        id:3,
        href: "/blog",
        link: "Blog"
    },
    {
        id:4,
        href: "/about",
        link: "About"
    },
    {
        id:5,
        href: "/contact",
        link: "Contact"
    }
]


function Navbar (){

    const [clicked, setClicked] = useState(false);
    const [pathHome, setPathHome] = useState(false);

    
    

    const pathname  = usePathname();

    if( pathname === "/"){

      //  console.log(pathname);
       // setPathHome(true)  
    }

    useEffect(()=>{

        if( pathname === "/"){

            console.log(pathname);
            setPathHome(true)  
        }else{
            setPathHome(false) 
        }
    
        

    },[pathname])


    /*if (pathname === '/'){
        setPathHome(true)
    }  */




    return < div    id="navbar">



        <div className="navbar"  >

            

            <div className={"navbar-links"}  >
            <Link  onClick={()=>{setClicked(false)}}  className="logo" href="/" >Ted</Link>

             <div className={clicked? "navbar-links-inner": "navbar-links-inner removemenu" }  >
                <div className="navbar-donate-now"  > <button>Donate Now</button> </div>

                {links.map((link)=>{
                    return <Link      onClick={()=>{setClicked(false)}}   className="navbarlink"  key={link.id}  href={link.href}  >{link.link}</Link>

                })}


            </div>

            <img    onClick={()=>{ setClicked((prev)=>{return !prev}) }} src="./humburger-icon.png"   />
            </div>
       

           


        </div>

     

    </div>
}


export default Navbar;