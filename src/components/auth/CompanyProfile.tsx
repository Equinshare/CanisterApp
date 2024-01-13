import { JSX } from "react";
import { useCreateCompany } from "../../state/state";
import {
  ArrowIcon,
  ParagraphIcon,
  PublicIcon,
  UploadIcon,
  CheckIcon,
} from "../../assets/icons";
import "../../styles/components/auth/profile.scss";

export const CompanyProfile = (): JSX.Element => {
  const {
    setCompanyName,
    setDescription,
    setPublicShares,
    setValuePerShare,
    setLegalDoc,
    setBusinessInfoDoc,
    companyName,
    description,
    legalDoc,
    businessInfoDoc,
    publicShares,
    valuePerShare,
  } = useCreateCompany((state: any) => state);

  const legalfileHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) console.log(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
    setLegalDoc(e.target.files[0]);
  };

  const bnsfileHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) console.log(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
    setBusinessInfoDoc(e.target.files[0]);
  };

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
        onChange={(e) => {
          setCompanyName(e.target.value);
        }}
      />

      <span id="companydescription">
        <span>
          <p className="title">Company description</p>

          <ParagraphIcon />
        </span>

        <textarea
          name="description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </span>

      <p className="title">Documents</p>
      <div className="files">
        <label htmlFor="legal-doc">
          <p className="title">Legal information</p>
          {legalDoc ? <CheckIcon /> : <UploadIcon />}

          <input
            id="legal-doc"
            name="legal-doc"
            type="file"
            hidden
            onChange={legalfileHandler}
          ></input>
        </label>

        <label htmlFor="bsn-doc">
          <p className="title">Business information</p>
          {businessInfoDoc ? <CheckIcon /> : <UploadIcon />}

          <input
            id="bsn-doc"
            name="bsn-doc"
            hidden
            type="file"
            onChange={bnsfileHandler}
          ></input>
        </label>
      </div>

      <p className="title">Share distribution</p>
      <div className="shares">
        <div>
          <span>
            <p className="title">Company public shares</p>
            <PublicIcon />
          </span>

          <input
            placeholder="1000000"
            type="number"
            maxLength={12}
            onChange={(e) => {
              setPublicShares(e?.target.value);
            }}
          />
        </div>

        <div>
          <span>
            <p className="title">Value per share</p>
            <PublicIcon />
          </span>

          <input
            placeholder="1000000"
            type="number"
            maxLength={12}
            onChange={(e) => {
              setValuePerShare(e.target.value);
            }}
          />
        </div>
      </div>

      <button className="submit" onClick={() => {}}>
        <p>Get started</p>
        <ArrowIcon />
      </button>
    </div>
  );
};
