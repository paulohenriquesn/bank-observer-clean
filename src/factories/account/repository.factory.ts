import { AccountRepository } from "../../data/repositories/account.repository";

class Factory {
  static instance: AccountRepository

  static getInstance(): AccountRepository {
    if(!this.instance) {
      this.instance = new AccountRepository()
    }
    return this.instance
  }
}

export const makeAccountRepository = () => Factory.getInstance();