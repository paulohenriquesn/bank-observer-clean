import { ACTION } from "../domain/enums/actions.enum";
import { Observer } from "../domain/protocols/observer.protocol";
import { makeCreateAccount } from "../factories/account/create.factory";

export class CreateAccountObserver implements Observer {
  async next({ action, document }: { action: ACTION, document: string }) {
    if (action !== ACTION.CREATE_ACCOUNT) return;
    await makeCreateAccount().execute({
      document
    })
  }
}