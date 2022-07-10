export class User {
    constructor(
      public id?: number,
      public cpf?: string,
      public name?: string,
      public mail?: string,
      public phoneNumber?: string,
      public isFirstAccess?: boolean,
      public acceptedTerms?: boolean,
      public tokenAccess?: string,
    ) {}
  }