import "./page.modules.css"
import JournalItem from "./JournalItem/JournalItem";
import { ObjectId } from "mongoose";

interface Journal {
    id: ObjectId,
    title: string;
    imageName:string
    journal: string;
   
  }




const getData = async ()=>{  

    const res = await fetch("http://localhost:3000/api/journals", {cache :"no-store"});

   
    //const data =  await res.json();

   // console.log(data);

    

    if(!res.ok){
       throw new Error("Error")
        
    }

    return res.json();


}





async function Blog (){

    const data = await getData();

    console.log(data.length);
    


   
    

    return <div  className="journal">

      {data.map((item:Journal,key:number)=>{

        return <JournalItem 
                  key={key} 
                  id={item.id}
                  title={item.title}
                  imageName={item.imageName}
                  journal={item.journal}

          />

      })}

       
    </div>
}


export default Blog;