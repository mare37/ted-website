



  export const getStories = async ()=>{
    
    
    const res = await fetch("http://localhost:3000/api/stories", {cache :"no-store"});

   
    //const data =  await res.json();

   // console.log(data);

    

    if(!res.ok){
       throw new Error("Error")
        
    }

  
    return res.json();

}