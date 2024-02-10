



const Upload = async (file:File, id:string,identity:string)=>{

    console.log(identity); 
    

     const formData = new FormData();
         

          if (!file) return;
          console.log(file);
          
          formData.append("file", file);
          formData.append("id", id);
         formData.append("fileName", file.name);
         formData.append("identity", identity);

          const res1 = await fetch("http://localhost:3000/api/upload", {
            method: 'POST',
          
            body: formData 
          })
    
          
          const response1 =  await res1.json() 
        
        console.log(response1); 


}


export default Upload