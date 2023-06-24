import { ACTION } from "../domain/enums/actions.enum";
import { Observer } from "../domain/protocols/observer.protocol";
import { makeExtract } from "../factories/account/extract.factory";

export class ExtractObserver implements Observer {
  async next({ action, document }: { action: ACTION, document: string }) {
    if (action !== ACTION.EXTRACT) return;
    console.log(await makeExtract().execute({
      document,
    }))
  }
}