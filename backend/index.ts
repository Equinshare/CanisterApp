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

// maps
const users = new StableBTreeMap<Principal, User>(0, 50, 500);
const proposals = new StableBTreeMap<ProposalId, Proposal>(1, 100, 1_000);

$query;
export function getUserById(id: Principal): Opt<User> {
  return users.get(id);
}

