
import "./Mainbar.modules.css"
import { ObjectId } from "mongoose"
import { useRouter } from "next/navigation"

interface journals{
    id:ObjectId,
    title:string,
    journal:string
    identity:string
    imageName:string


}

interface Story {
    id:ObjectId,
    title: string;
    tag:string,
    story: string;
    imageName:string
    identity:string
   

   
  }

  type Props = journals | Story


function Item (props:  Props ){

    const router = useRouter()
    
 


    return(
        <div className="mainbar-journalItem">
        <section>
            <img   src={`./${props.imageName}`} />
        </section>
    
        <section  className="mainbar-journalItem-text" >
            <h3>{props.title}</h3>
            <p   onClick={()=>{ router.push(`/${props.identity}/${props.id}`)}}    >Read more</p>
            
        </section>
    
    
      </div>
    
    )
}


export default Item;

