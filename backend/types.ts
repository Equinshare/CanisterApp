import {
  Record,
  Vec,
  Principal,
  text,
  Variant,
  nat,
  nat64,
  float32,
  int8,
  blob

} from "azle";



interface User {
  internetId:text
}
export interface Company extends User {
  id:text,
  companyName:text,
  description:text,
  publicShares:float32,
  legalDoc:blob,
  businessInfoDoc:blob

}

export interface Investor extends User{
  
}



