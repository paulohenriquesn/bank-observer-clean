import { Withdraw } from "../../app/usecases/account/withdraw.case";
import { makeAccountRepository } from "./repository.factory";

class Factory {
  static instance: Withdraw

  static getInstance() {
    if(!this.instance) {
      this.instance = new Withdraw(makeAccountRepository())
    }
    return this.instance
  }
}

export const makeWithdraw = () => Factory.getInstance();
