import { sleep } from "../../utils/sleep";
import { httpClient } from "../httpClient";

export interface BankAccountParams {
  name: string;
  initialBalance: number;
  color: string;
  type: 'INVESTMENT' | 'CHECKING' | 'CASH'
}

export async function create(params: BankAccountParams) {
  await sleep();
  const { data } = await httpClient.post('/bank-accounts', params);
  
  return data;
}