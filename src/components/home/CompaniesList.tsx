import { JSX } from "react";
import { ArrowIcon } from "../../assets/icons";
import "../../styles/components/home/companylist.scss";

export const CompaniesList = (): JSX.Element => {
  return (
    <div className="companylist">
      <div className="company">
        <p className="eqn">Equinshares</p>

        <span className="shares">
          <p>100K Shares</p>
          <p>30$ Per shape 2 ICP per share</p>
        </span>

        <button>
          <p>Learn More</p>
          <ArrowIcon />
        </button>
      </div>

      <div className="company">
        <p className="eqn">Equinshares</p>

        <span className="shares">
          <p>100K Shares</p>
          <p>30$ Per shape 2 ICP per share</p>
        </span>

        <button>
          <p>Learn More</p>
          <ArrowIcon />
        </button>
      </div>

      <div className="company">
        <p className="eqn">Equinshares</p>

        <span className="shares">
          <p>100K Shares</p>
          <p>30$ Per shape 2 ICP per share</p>
        </span>

        <button>
          <p>Learn More</p>
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
};
