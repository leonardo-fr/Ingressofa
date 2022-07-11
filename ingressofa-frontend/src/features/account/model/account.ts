export interface Account {
    account: number
    nome: string
    cpf: string
    status: AccountStatus
  }
  
  export enum AccountStatus {
    disabled,
    enabled,
  }