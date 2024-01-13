import {
  
  ic,
  $query,
  $update,
  Opt,
  Vec,
  Principal,
  Tuple,
  text,
  match,
  StableBTreeMap,
  Variant,
  nat,
  Record,
} from "azle";

import {
  ICRC1Account,
  ICRC,
  ICRC1TransferArgs,
  ICRC1TransferError,
  ICRC1Value,
} from "azle/canisters/icrc";

import { Investor, Company } from "./types";

const companies = new StableBTreeMap<text, Company>(0, 50, 500);
const investors= new StableBTreeMap<text, Investor>(0,0,50);



$query;
export function getUserById(id: Principal): Opt<User> {
  return users.get(id);
}
$update;

export function onBoardCompany(compny:Company):any{


}

