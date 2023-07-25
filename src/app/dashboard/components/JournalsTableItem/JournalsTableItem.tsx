import "./JournalsTableItem.modules.css"


function JournalsTableItem (){



    return <div className="table-item"  >
         <span className="table-item-no">1</span>
                    <span className="table-item-title" >Lorem ipsum dolor sit amet, consectetuer adipiscing</span>
                    <span className="table-item-buttons"> <button className="tableItem-edit"  >Edit</button> <button className="tableItem-delete">Delete</button>  </span>
    </div>
}



export default JournalsTableItem;
