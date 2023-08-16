


export const getJournals = async ()=>{
    
    

     try{
      const res = await fetch("http://localhost:3000/api/journals", {cache :"no-store"});
      return res.json();

      if(!res.ok){
        
         throw new Error("Error")
          
      }


     }catch(error){

     
      console.log(error);
      
      throw new Error("Error")

      
    
      
     }

   
    
   
    //const data =  await res.json();

   // console.log(data);

    

   

   


}





export async function getOneJournal(id:string) {
   console.log(id);
   
   const res = await fetch(`http://localhost:3000/api/journals/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
     
    },
    body: JSON.stringify({ id: id }),
  })
 
  return res.json();
 } 