import { JSX, useEffect, useState } from "react";
// import { Search } from "../components/home/Search";
// import { CompaniesList } from "../components/home/CompaniesList";
// import { MyInvestments } from "../components/home/MyInvestments";
import { InvestorsList } from "../components/home/InvestorsList";
import { CompanyAccount } from "../components/home/CompanyAccount";
import "../styles/screens/home.scss";
import { getDoc } from "@junobuild/core";




export default function Home(): JSX.Element {
const [doc, setDoc]=useState(null)
const currentURL = window.location.href;


const urlParts = currentURL.split("/");

const homeIndex = urlParts.indexOf("home");


const paramValue = urlParts[homeIndex + 1];



async function getDocument(){
try{
 const document= await getDoc({
    collection: "users",
    key:paramValue,
  })
  console.log(JSON.stringify(document))
  return document;
}
catch(e){
  //console.log(e)
throw new Error("An Error occured")

}
}
useEffect(()=>{
  console.log(paramValue)
setDoc(getDocument())

})
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
