import { Extract } from "../../app/usecases/account/extract.case";
import { makeAccountRepository } from "./repository.factory";

class Factory {
  static instance: Extract

  static getInstance() {
    if(!this.instance) {
      this.instance = new Extract(makeAccountRepository())
    }
    return this.instance
  }
}

export const makeExtract= () => Factory.getInstance();
