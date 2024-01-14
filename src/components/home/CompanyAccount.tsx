import { JSX } from "react";
import {
  ArrowIcon,
  CheckIcon,
  PublicIcon,
  RefreshIcon,
} from "../../assets/icons";
import "../../styles/components/home/companyaccount.scss";


export const CompanyAccount = (): JSX.Element => {
  return (
    <div className="companyaccount">
      <p className="titles">My business profile</p>

      <p className="fainttitle lgmargin">Name</p>

      <p className="titles smmargin">Equinshares</p>

      <p className="fainttitle lgmargin">Description</p>

      <p className="titles smmargin">Lorem Ipsum dolor sit amet...</p>

      <p className="fainttitle lgmargin">My documents</p>

      <div className="buttons">
        <div className="button">
          <span>Business Information</span>
          <CheckIcon />
          <div className="divider" />
          <RefreshIcon />
        </div>

        <div className="button">
          <span>Legal Information</span>
          <CheckIcon />
          <div className="divider" />
          <RefreshIcon />
        </div>
      </div>

      <p className="fainttitle smmargin">My share distribution</p>

      <div className="av_shares">
        <div className="sh_class">
          <div>
            <span>Available shares</span>
            <PublicIcon />
          </div>

          <p>60000</p>
        </div>

        <div className="sh_class">
          <div>
            <span>Available shares</span>
            <PublicIcon />
          </div>

          <p>60000</p>
        </div>

        <div className="init">
          <p>Initial share count</p>
          <p>10000000</p>
        </div>
      </div>

      <div className="website">
        <input
          placeholder="My Company Website URL"
          type="text"
          name="website_url"
          id="web_url"
        />

        <div className="savebtn">
          <span>Save</span>
          <ArrowIcon />
        </div>
      </div>
    </div>
  );
};
