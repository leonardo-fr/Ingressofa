import { User } from '../../../hook/user'
import { Account } from '../model/account'

export interface AccountState {
  account?: Account
  loading: boolean
  errorMessage?: string
  user?: User
}

export class InitialAccountState implements AccountState {
  errorMessage?: string
  loading: boolean = false

  constructor(
    public account?: Account,
  ) {}
}

export class LoadingAccountState implements AccountState {
  loading: boolean = true
  errorMessage?: string | undefined

  constructor(
    public account: Account | undefined,
  ) {}
}

export class SuccessAccountState implements AccountState {
  loading: boolean = false
  errorMessage?: string

  constructor(
    public account: Account,
  ) {}
}

export class FailAccountState implements AccountState {
  loading: boolean = false

  constructor(
    public errorMessage: string,
    public account?: Account,
  ) {}
}

export interface TransferState {
  account?: Account
  user?: User
}