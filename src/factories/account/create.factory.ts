import { CreateAccount } from "../../app/usecases/account/create.case";
import { makeAccountRepository } from "./repository.factory";

class Factory {
  static instance: CreateAccount

  static getInstance() {
    if(!this.instance) {
      this.instance = new CreateAccount(makeAccountRepository())
    }
    return this.instance
  }
}

export const makeCreateAccount = () => Factory.getInstance();
