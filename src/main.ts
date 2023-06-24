import data from './data.json'
import { Observer } from './domain/protocols/observer.protocol';
import { AccountObservable } from './observables/account.observable';
import { CreateAccountObserver } from './observers/create-account.observer';
import { DepositObserver } from './observers/deposit.observer';
import { ExtractObserver } from './observers/extract.observer';
import { WithdrawObserver } from './observers/withdraw.observer';

const observers: Record<string, Observer> = {
  create_account: new CreateAccountObserver(),
  withdraw: new WithdrawObserver(),
  deposit: new DepositObserver(),
  extract: new ExtractObserver()
}

const observable = new AccountObservable()

Object.keys(observers).forEach((observerKey: string) => {
  observable.addObserver(observers[observerKey])
})

data.forEach((event) => {
  observable.emit(event);
})
