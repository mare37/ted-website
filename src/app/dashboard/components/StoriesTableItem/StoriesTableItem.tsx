
import "./StoriesTableItem.modules.css"
import { ObjectId } from "mongoose"
import { useGlobalContext } from "@/app/context/store";
import Link from "next/link";


interface Story {
    id: ObjectId,
    title: string;
    tag:string,
    story: string;
   
  }







function StoriesTableItem({ id,tag, title,story}:Story){

 // console.log(id);
  

    const {popup,setPopup, journalId, setJournalId,journalTitle, setJournalTitle,storyId, setStoryId,storyTitle, setStoryTitle } = useGlobalContext();

    return  <div className="table-item"  >
                <span className="table-item-title">{title}</span>
               <span className="table-item-tag" >{tag}</span>
               <span className="table-item-buttons"> <button  className="tableItem-edit"  >  <Link  href={`/dashboard/stories/editstory/${id.toString()}`}     >Edit</Link>  </button> <button  onClick={()=>{setPopup(true);setStoryId(id.toString()), setStoryTitle(title)  }} className="tableItem-delete">Delete</button>  </span>
            </div>
}


export default StoriesTableItem;