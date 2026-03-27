import type {
  AccountContractReadOptions,
  AccountContractWriteResult,
  InvocationArgs,
} from './account-contract';
import { AccountContract } from './account-contract';

type AddSessionKeyHelper = {
  (
    contract: AccountContract | string,
    publicKey: string | Uint8Array,
    permissions: number[],
    expiresAt: number
  ): InvocationArgs;
  (
    contract: AccountContract | string,
    publicKey: string | Uint8Array,
    permissions: number[],
    expiresAt: number,
    options: AccountContractReadOptions
  ): Promise<AccountContractWriteResult>;
};

function getContract(contract: AccountContract | string): AccountContract {
  return typeof contract === 'string' ? new AccountContract(contract) : contract;
}

export const addSessionKey: AddSessionKeyHelper = (
  contract,
  publicKey,
  permissions,
  expiresAt,
  options?
) =>
  getContract(contract).addSessionKey(
    publicKey,
    permissions,
    expiresAt,
    options as AccountContractReadOptions
  ) as InvocationArgs | Promise<AccountContractWriteResult>;
