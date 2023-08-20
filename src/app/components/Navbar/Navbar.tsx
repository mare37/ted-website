"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from 'next/navigation'
import image  from "../../assets/humburger-icon.png"
import  "./Navbar.modules.css"


const links = [
    {
        id:1,
        href: "/our-work",
        link: "Our Work"
    },
    {
        id:2,
        href: "/get-involved",
        link: "Why Reafforestration?"
    },
    {
        id:3,
        href: "/journal",
        link: "Journal"
    },
    {
        id:4,
        href: "/impact",
        link: "Our Impact In the Field"
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
    let [headerScrollClass, setHeaderScrollClass] = useState(false);

    
    

    const pathname  = usePathname();

    if( pathname === "/get-involved"){

       console.log(pathname);
       // setPathHome(true)  
    }


    const changeBackground = () => {

        if( pathname === "/"){

            if (window.scrollY > 100) {
                setHeaderScrollClass(true);
              } else {
                console.log(window.scrollY);
                setHeaderScrollClass(false);
              }
         }else{

            setHeaderScrollClass(true);
         }



       
      };
    
      useEffect(() => {
        window.addEventListener("scroll", changeBackground);
        return () => {
          window.removeEventListener("scroll", changeBackground);
        };
      }, [headerScrollClass]);




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



        <div className={headerScrollClass? "navbar scroll": "navbar"}  >
 
            

            <div className={"navbar-links"}  >
            <Link  onClick={()=>{setClicked(false)}}  className="logo" href="/" >Ted</Link>

             <div className={clicked? "navbar-links-inner": "navbar-links-inner removemenu" }  >
                <div className="navbar-donate-now"  > <button>Donate Now</button> </div>

                {links.map((link)=>{
                    return <Link      onClick={()=>{setClicked(false)}}   className={headerScrollClass? "navbarlink scroll": "navbarlink"}  key={link.id}  href={link.href}  >{link.link}</Link>

                })}


            </div>

            <img    onClick={()=>{ setClicked((prev)=>{return !prev}) }} src={image.src}   />
            </div>
       
 
           


        </div>

     

    </div>
}


export default Navbar;