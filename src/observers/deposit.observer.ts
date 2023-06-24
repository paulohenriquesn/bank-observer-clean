import { ACTION } from "../domain/enums/actions.enum";
import { Observer } from "../domain/protocols/observer.protocol";
import { makeDeposit } from "../factories/account/deposit.factory";

export class DepositObserver implements Observer {
  async next({ action, document, amount }: { action: ACTION, document: string, amount: number }) {
    if (action !== ACTION.DEPOSIT) return;
    await makeDeposit().execute({
      document,
      amount
    })
  }
}