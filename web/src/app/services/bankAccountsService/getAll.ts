import { BankAccounts } from "@/app/entities/bankAccount";
import { httpClient } from "../httpClient";

export type BankAccountResponse = Array<BankAccounts>;

export async function getAll() {
  const { data } = await httpClient.get<BankAccountResponse>("/bank-accounts");
  return data;
}
