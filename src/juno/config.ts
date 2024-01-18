import { initJuno } from "@junobuild/core";
import { setDoc } from "@junobuild/core";
import { nanoid } from "nanoid";
import { handleError } from "../util";

const document_key = nanoid();

export const initilizeJuno = async () => {
  await initJuno({
    satelliteId: "oeoh3-eiaaa-aaaal-adm5a-cai",
  });
};

export const createCompany = async (data) => {
  try {
    const res = await setDoc({
      collection: "users",
      doc: {
        key: document_key,
        data,
      },
    });
    console.log(res);

    return res;
  } catch (e) {
    throw new Error(`There was an error ${handleError(e)}`);
  }
};

export const createInvestor = async (data) => {
  try {
    await setDoc({
      collection: import.meta.env.VITE_INVESTORS_COLLECTION,
      doc: {
        key: document_key,
        data,
      },
    });
  } catch (e) {
    throw new Error(`There was an error ${handleError(e)}`);
  }
};

export const tokenize = (valuePerShare, numberOfShares) => {
  const totalValue = valuePerShare * numberOfShares;
  const tokenPrice = 12;
  const totalTokens = totalValue / 12;
  return totalTokens;
};
