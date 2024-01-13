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
const {setCompanyName, setCompanyDescription,setFiles,setPublicShares, setLegalDoc,setBusinessInfoDoc}=useCreateCompany((state:any)=>state)
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
        
        />
      </span>

      <p className="title">Documents</p>
      <div className="files">
        <span>
          <p className="title">Legal information</p>
          <UploadIcon />
        </span>

        <span>
          <p className="title">Business information</p>
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

          <input placeholder="1000000" type="number" maxLength={12} />
        </div>

        <div>
          <span>
            <p className="title">Value per share</p>
            <PublicIcon />
          </span>

          <input placeholder="1000000" type="number" maxLength={12} />
        </div>
      </div>

      <button className="submit">
        <p>Get started</p>
        <ArrowIcon />
      </button>
    </div>
  );
};
