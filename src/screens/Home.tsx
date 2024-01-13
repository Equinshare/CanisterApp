import { JSX } from "react";
// import { Search } from "../components/home/Search";
// import { CompaniesList } from "../components/home/CompaniesList";
// import { MyInvestments } from "../components/home/MyInvestments";
import { InvestorsList } from "../components/home/InvestorsList";
import { CompanyAccount } from "../components/home/CompanyAccount";
import "../styles/screens/home.scss";

export default function Home(): JSX.Element {
  return (
    <section className="main">
      <div className="left_sect">
        <p className="invs_titles">Equinshire Investors</p>
        <InvestorsList />

        {/* <Search /> */}
        {/* <p className="title">All Companies</p> */}
        {/* <CompaniesList /> */}
      </div>

      <div className="right_sect">
        <CompanyAccount />
        {/* <p className="investments_title">My Investments</p> */}
        {/* <MyInvestments /> */}
      </div>
    </section>
  );
}
