import { create } from "zustand";

interface User {
  internetId: string;
}

export interface Company extends User {
  id: string;
  companyName: string;
  description: string;
  publicShares: number;
  valuePerShare: number;
  legalDoc: File;
  businessInfoDoc: File;
}

export interface Investor extends User {}

export const useCreateCompany = create((set) => ({
  id: "",
  companyName: "",
  description: "",
  publicShares: "",
  valuePerShare: "",
  legalDoc: null,
  businessInfoDoc: null,
  setId: (id: string): void => set({ id }),
  setCompanyName: (companyName: string): void => set({ companyName }),
  setDescription: (description: string): void => set({ description }),
  setPublicShares: (publicShares: number): void => set({ publicShares }),
  setValuePerShare: (valuePerShare: number): void => set({ valuePerShare }),
  setLegalDoc: (legalDoc: File | any): void => set({ legalDoc }),
  setBusinessInfoDoc: (businessInfoDoc: File | any): void =>
    set({ businessInfoDoc }),
}));
