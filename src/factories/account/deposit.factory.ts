import { Deposit } from "../../app/usecases/account/deposit.case";
import { makeAccountRepository } from "./repository.factory";

class Factory {
  static instance: Deposit

  static getInstance() {
    if(!this.instance) {
      this.instance = new Deposit(makeAccountRepository())
    }
    return this.instance
  }
}

export const makeDeposit = () => Factory.getInstance();
