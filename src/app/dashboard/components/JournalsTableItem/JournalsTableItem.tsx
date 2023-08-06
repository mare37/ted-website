import "./JournalsTableItem.modules.css"
import { ObjectId } from "mongoose";

interface Journal {
    no:number
    id: ObjectId,
    title: string;
    journal: string;
   
  }



  



function JournalsTableItem ({no ,id, title,journal}: Journal){







  



    return <div className="table-item"  >
         <span className="table-item-no">{no}</span>
                    <span className="table-item-title" >{title}</span>
                    <span className="table-item-buttons"> <button className="tableItem-edit"    >Edit</button> <button className="tableItem-delete"   >Delete</button>  </span>
    </div>
}



export default JournalsTableItem;
