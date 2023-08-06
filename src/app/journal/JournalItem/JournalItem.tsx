import "./JournalItem.modules.css"
import { ObjectId } from "mongoose";

interface Journal {
    id: ObjectId,
    title: string;
    journal: string;
   
  }


function JournalItem(props: Journal ){

    return <div className="journal-item"  >

        <div className="journal-container"  >

        <div  className="journal-image"  >
           
        </div>

        <div className="journal-item-text"  >

        <h2>June 7, 2023 </h2>

  <h1>{props.title}</h1>

 <p>{props.journal} </p>  

  <p>Continue reading</p> 


        </div>


        </div>

      


    </div>
}


export default JournalItem;