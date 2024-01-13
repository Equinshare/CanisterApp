import { JSX } from "react";
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

export const CompanyProfile = (): JSX.Element => {
const {setCompanyName, setCompanyDescription,setFiles,setPublicShares, setLegalDoc,setBusinessInfoDoc, setValuePerShare}=useCreateCompany((state:any)=>state)
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
         OnChange={(e) =>{
          setCompanyDescription(e.target.value)

         }}
        />
      </span>

      <p className="title">Documents</p>
      <div className="files">
        <span>
          <input type="file" className="title"
          onChange={ (e)  =>{
            setLegalDoc(e.target.files[0])
          }}
          > Legal Information </input>
          <UploadIcon />
        </span>

        <span>
          <input type="file" className="title" 
          onChange={ (e) =>{
            setBusinessInfoDoc(e.target.files[0])
          }}
          >Business information</input>
          <UploadIcon />
        </span>
      </div>

      <p className="title">Share distribution</p>
      <div className="shares">
        <div>
          <span>
            <p className="title">Company public shares</p>
            <PublicIcon />
          </span>

          <input placeholder="1000000" type="number" maxLength={3} 
          onChange={ (e) =>{
             setPublicShares(e.target.value)
          }}
          />
        </div>

        <div>
          <span>
            <p className="title">Value per share</p>
            <PublicIcon />
          </span>

          <input placeholder="1000000" type="number" maxLength={12} 
          onChange={ (e) =>{
            setValuePerShare(e.target.value)
          }}
          />
        </div>
      </div>

      <button className="submit">
        <p>Get started</p>
        <ArrowIcon />
      </button>
    </div>
  );
};
