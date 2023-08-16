import "./JournalsTableItem.modules.css"
import { ObjectId } from "mongoose";
import { useEffect, useState } from "react";
import { useGlobalContext } from "@/app/context/store";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Journal {
    no:number
    id: ObjectId,
    title: string;
    journal: string;
   
  }



  

  



function JournalsTableItem ({no ,id, title,journal}: Journal){

  const router = useRouter();


 // const [journalId , setJournalId] = useState(false)
  const {popup,setPopup, journalId, setJournalId,journalTitle, setJournalTitle} = useGlobalContext();


  async function deleteJournal  (id:ObjectId){  
   // setJournalId(false)
    console.log(id);
    
    
  

    const res = await fetch(`http://localhost:3000/api/journals`,  {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
       
      },
      body: JSON.stringify({ method:"DELETE",title:"",content:"",id:id }),
    });

    const data = await res.json();

   // setJournalId(true)
    location.reload() 
    console.log(data);
    
    

   
    //const data =  await res.json();

   // console.log(data);

    

    if(!res.ok){
       throw new Error("Error")
        
    }

   


}


useEffect(()=>{
  //location.reload(); 
},[journalId])






  



    return <div className="table-item"  >
         <span className="table-item-no">{no}</span>
                    <span   onClick={()=>{router.push(`/journal/${id}`)}}     className="table-item-title" >{title}</span>
                    <span className="table-item-buttons"> 
                    <button className="tableItem-edit"  onClick={()=>{setJournalId(id.toString())}}  >   <Link href={`/dashboard/journal/editjournal/${id.toString()}`}>Edit</Link>    </button>
                    
                    <button className="tableItem-delete"  onClick={()=>{ setPopup(true); setJournalId(id.toString()); setJournalTitle(title)  }} >Delete</button>  </span>
    </div>
}



export default JournalsTableItem;
