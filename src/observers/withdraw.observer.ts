import { ACTION } from "../domain/enums/actions.enum";
import { Observer } from "../domain/protocols/observer.protocol";
import { makeWithdraw } from "../factories/account/withdraw.factory";

export class WithdrawObserver implements Observer {
  async next({ action, document, amount }: { action: ACTION, document: string, amount: number }) {
    if (action !== ACTION.WITHDRAW) return;
    await makeWithdraw().execute({
      document,
      amount
    })
  }
}