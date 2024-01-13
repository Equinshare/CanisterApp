import { initJuno } from "@junobuild/core";
import { setDoc } from "@junobuild/core";
import { nanoid } from "nanoid";




const document_key = nanoid();

export const initilizeJuno=async ()=>{

    await initJuno({
        satelliteId: "oeoh3-eiaaa-aaaal-adm5a-cai",
      });

}
export const createCompany= async(data)=>{

try{
   const res=  await setDoc({
    collection: "users",
    doc: {
      key: document_key,
      data
    
    },
  });
  console.log(res)

return res

}
catch (e){
throw new Error(`There was an error ${e}`)

}

   
}


export const createInvestor= async(data)=>{

    try{
         await setDoc({
        collection: import.meta.env.VITE_INVESTORS_COLLECTION,
        doc: {
          key: document_key,
          data
        
        },
      });
    
    
    }
    catch{
    throw new Error(`There was an error`)
    
    }
    
       
    }
    

    const tokenize= ()=>{

    }
