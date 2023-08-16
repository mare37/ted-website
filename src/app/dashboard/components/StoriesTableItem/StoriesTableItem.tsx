
import "./StoriesTableItem.modules.css"
import { ObjectId } from "mongoose"
import { useGlobalContext } from "@/app/context/store";
import Link from "next/link";
import { useRouter } from "next/navigation";


interface Story {
    id: ObjectId,
    title: string;
    tag:string,
    story: string;
   
  }







function StoriesTableItem({ id,tag, title,story}:Story){

  const router = useRouter()

 // console.log(id);
  

    const {popup,setPopup, journalId, setJournalId,journalTitle, setJournalTitle,storyId, setStoryId,storyTitle, setStoryTitle } = useGlobalContext();

    return  <div className="table-item"  >
                <span   onClick={()=>{router.push(`/impact/${id}`)}}      className="table-item-title">{title}</span>
               <span   onClick={()=>{router.push(`/impact/${id}`)}}       className="table-item-tag" >{tag}</span>
               <span className="table-item-buttons"> <button  className="tableItem-edit"  >  <Link  href={`/dashboard/stories/editstory/${id.toString()}`}     >Edit</Link>  </button> <button  onClick={()=>{setPopup(true);setStoryId(id.toString()), setStoryTitle(title)  }} className="tableItem-delete">Delete</button>  </span>
            </div>
}


export default StoriesTableItem;