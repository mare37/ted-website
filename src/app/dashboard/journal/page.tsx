'use client'

import Link from "next/link";
import "./page.modules.css"
import { ObjectId } from "mongoose";

import Sidebar from "@/app/portal_components/Sidebar/Sidebar";
import JournalsTableItem from "../components/JournalsTableItem/JournalsTableItem";
import { useGlobalContext } from "@/app/context/store";
import { useEffect, useState } from "react";
import JournalItem from "@/app/journal/JournalItem/JournalItem";

interface Journal {
    _id: ObjectId,
    title: string;
    journal: string;
   
  }



function Journal (){

    const {sidebar, setSidebar} = useGlobalContext();
    const [journals, setJournals] = useState([]);
    const [isLoading,setIsLoading] = useState(false);

   let counter = 1;


   const getData = async ()=>{
    
    setIsLoading(true);

    const res = await fetch("http://localhost:3000/api/journals", {cache :"no-store"});

   
    //const data =  await res.json();

   // console.log(data);

    

    if(!res.ok){
       throw new Error("Error")
        
    }

    return res.json();


}

    const getDataInfo = async () =>{
        let data = await getData();
        data = data.reverse();
        setJournals(data)
        setIsLoading(false);

        console.log(data);
        

    }



    useEffect(()=>{

        getDataInfo();

    },[])

    let journalsData 

    if(isLoading === true){
         journalsData  = <p>Loading...</p>

    }

     if(isLoading === false){

       if(  journals.length === 0  ){

         journalsData  = <p>No Journals</p>


       }else{

         journalsData =  journals.map((item: Journal, key:number)=>{
                           

            return <JournalsTableItem 
                     no={counter++}
                     key={key}
                     id={item._id}
                     title={item.title}
                     journal={item.journal}
                 />
         })

       }
    }

  





    return <div  className="dashboard"  >

        <Sidebar/>

        <div         className={sidebar ? "mainbar after": "mainbar"}  >
        <div className="mainbar-nav"  >  <img className="mainbar-nav-humburger" onClick={()=>{setSidebar((prev: boolean)=>{ console.log(prev);
         return !prev})    }}   src="../humburger-icon.png"   />    <div>   <img     src="../men-digging.jpg"   />  <p>Welcome Ted</p>   </div>            </div>


         <div className="mainbar-body"  >
            <h2>Journals</h2>

            <button className="create-new-journal" >   <Link href={"/dashboard/journal/createjournal"}> Create New Journal</Link>    </button>


            <div className="table-container"   >
                <div  className="table-heading" >  
                    <span className="table-heading-no">No.</span>
                    <span className="table-heading-title" >Title</span>
                    <span className="table-heading-buttons">Delete or Edit</span>
                </div>
                
                 {journalsData}

               
              
             

            


            </div>

          

           

          

          

         

         </div>
    
    
    
    </div>




    </div>
}


export default Journal;