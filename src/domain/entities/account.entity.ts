import { UserHasNoBalanceSufficientException } from "../../app/exceptions/UserHasNoBalanceSufficient.exception";
import { InvalidAmountException } from "../../app/exceptions/InvalidAmount.exception";

export class Account {
  private document: string
  private balance: number = 0;
  private extract: string[] = []

  constructor(
    document: string,
    balance?: number
  ) {
    this.document = document;
    if(balance) this.balance = balance;
    this._InsertOnExtract(`Saldo inicial ${0}`)
  }

  _InsertOnExtract(message: string) {
    this.extract.push(message)
  }
  
  getDocument() {
    return this.document
  }

  getBalance() {
    return this.balance
  }

  deposit(amount: number) {
    if(amount <= 0) throw new InvalidAmountException();
    this._InsertOnExtract(`Deposito de R$${amount}`)
    this.balance += amount;
  }

  withdraw(amount: number) {
    if(amount <= 0) throw new InvalidAmountException();
    if(this.getBalance() < amount) throw new UserHasNoBalanceSufficientException();
    this._InsertOnExtract(`Saque de R$${amount}`)
    this.balance -= amount;
  }

  getExtract() {
    return this.extract;
  }
}