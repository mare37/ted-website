
import "./StoriesTableItem.modules.css"
import { ObjectId } from "mongoose"



interface Story {
    id: ObjectId,
    title: string;
    tag:string,
    story: string;
   
  }







function StoriesTableItem({ id,tag, title,story}:Story){

    return  <div className="table-item"  >
                <span className="table-item-title">{title}</span>
               <span className="table-item-tag" >{tag}</span>
               <span className="table-item-buttons"> <button className="tableItem-edit"  >Edit</button> <button className="tableItem-delete">Delete</button>  </span>
            </div>
}


export default StoriesTableItem