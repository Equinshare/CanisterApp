import { JSX, useState } from "react";
import {
  ArrowIcon,
  ParagraphIcon,
  PublicIcon,
  UploadIcon,
  CheckIcon,
} from "../../assets/icons";

import { colors } from "../../assets/colors";
import "../../styles/components/auth/profile.scss";
import { useCreateCompany } from "../../state/state";
import { createCompany } from "../../juno/config";
import { useNavigate } from "react-router-dom";

export const CompanyProfile = (): JSX.Element => {

const {setCompanyName, setCompanyDescription,setFiles,setPublicShares, setValuePerShare, setLegalDoc,setBusinessInfoDoc,
companyName,
description,
legalDoc,
businessInfoDoc,
publicShares,
valuePerShare



}=useCreateCompany((state:any)=>state)
const navigation=useNavigate()

const fileHandler=(e)=>{
  const reader= new FileReader();
  reader.onload=()=>{
    if(reader.readyState===2)setBusinessInfoDoc(reader.result)
  };

}
  return (
    <div className="companyprofile">
      <span className="top">
        <p className="title">Create your company profile</p>
        <div className="divider" />
      </span>

      <input
        type="text"
        className="companyname"
        placeholder="Company name"
        max={128}
        onChange={(e)=>{
          setCompanyName(e.target.value)

        }}
      />

      <span id="companydescription">
        <span>
          <p className="title">Company description</p>

          <ParagraphIcon />
        </span>

        <textarea name="description" 
        onChange={(e)=>{
          setCompanyDescription(e.target.value)
        }}
        />
      </span>

      <p className="title">Documents</p>
      <div className="files">
        <label  htmlFor="legal-doc">
          <p className="title">Legal information</p>
          <input id="legal-doc" name="legal-doc" type="file" hidden
          onChange={(e)=>{
fileHandler(e)
          }}
          >
     
          </input>
          <UploadIcon/>
         
        </label>

        <label htmlFor="bsn-doc">
          <p className="title">Business information</p>
          <input id="bsn-doc" name="bsn-doc" hidden type="file" onChange={(e)=>{
fileHandler(e)

          }} >
        
          </input>
          <UploadIcon/>
          
        </label>
      </div>

      <p className="title">Share distribution</p>
      <div className="shares">
        <div>
          <span>
            <p className="title">Company public shares</p>
            <PublicIcon />
          </span>

          <input placeholder="1000000" type="number" maxLength={12}
          
          onChange={(e)=>{
            setPublicShares(e?.target.value)

          }}
          />
        </div>

        <div>
          <span>
            <p className="title">Value per share</p>
            <PublicIcon />
          </span>

          <input placeholder="1000000" type="number" maxLength={12} 
          
          onChange={(e)=>{
setValuePerShare(e.target.value)
          }}
          />
        </div>
      </div>

      <button className="submit"
      onClick={()=>{
  
      
    createCompany({
        companyName,
description,
legalDoc,
businessInfoDoc,
publicShares,
valuePerShare
       }).then((data)=>{
        
navigation(`/home/${data?.key}`)
       })
 

      }}
      >
        <p>Get started</p>
        <ArrowIcon />
      </button>
    </div>
  );
};