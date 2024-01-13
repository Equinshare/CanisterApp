import { JSX } from "react";
import { ArrowIcon, PlusIcon } from "../../assets/icons";
import "../../styles/components/home/investments.scss";

export const MyInvestments = (): JSX.Element => {
  return (
    <div id="investment_list">
      <div className="investment">
        <div>
          <p className="companyname">Equinshares</p>

          <p>100K shares</p>

          <p>2 ICP - 10 shares</p>
        </div>

        <span className="arrow">
          <ArrowIcon />
        </span>
      </div>

      <div className="investment">
        <div>
          <p className="companyname">Equinshares</p>

          <p>100K shares</p>

          <p>2 ICP - 10 shares</p>
        </div>

        <span className="arrow">
          <ArrowIcon />
        </span>
      </div>

      <div className="investment">
        <div>
          <p className="companyname">Equinshares</p>

          <p>100K shares</p>

          <p>2 ICP - 10 shares</p>
        </div>

        <span className="arrow">
          <ArrowIcon />
        </span>
      </div>
    </div>
  );
};
