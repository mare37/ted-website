
import "./StoriesTableItem.modules.css"

function StoriesTableItem(){

    return  <div className="table-item"  >
                <span className="table-item-title">Lorem ipsum dolor</span>
               <span className="table-item-tag" >EMPLOYEE STORY</span>
               <span className="table-item-buttons"> <button className="tableItem-edit"  >Edit</button> <button className="tableItem-delete">Delete</button>  </span>
            </div>
}


export default StoriesTableItem