
import { useState,useEffect } from "react"


const useWindowWide = () => {
    const [width, setWidth] = useState(0)


    function handleResize() {
        setWidth(window.innerWidth)
      }


    
    useEffect(() => {
          
        window.addEventListener("resize", handleResize)
       
        

        return () => { 
          window.removeEventListener("resize", handleResize)
        }
      }, [width])
    
    return  width
  }


  

  export default useWindowWide