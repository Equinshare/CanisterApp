import { create } from "zustand"
  interface User {
    internetId:string
  }
  export interface Company extends User {
    id:string,
    companyName:string,
    description:string,
    publicShares:number,
    legalDoc:File,
    businessInfoDoc:File
  
  }
  
  export interface Investor extends User{
    
  }



  export const useCreateCompany= create((set)=>({

    id:"",
    companyName:"",
    description:"",
    publicShares:"",
    legalDoc:null,
    businessInfoDoc:null,
    setId:(id:string)=>set({id}),
    setCompanyName:(companyName:string)=>set({companyName}),
    setDescription:(description:string)=>set({description}),
    setPublicShares:(publicShares:number)=>set({publicShares}),
    setLeglDoc:(legalDoc:File)=>set({legalDoc}),
    setBusinessInfoDoc:(businessInfoDoc:File)=>set({businessInfoDoc})

   
  }))
  



  
  