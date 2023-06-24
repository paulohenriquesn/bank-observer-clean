import { Account } from "../../domain/entities/account.entity";
import { Repository } from "../../domain/protocols/repository.protocol";

export class AccountRepository implements Repository<Account> {
  public accounts: Account[] = []

  save(account: Account): Account {
    this.accounts.push(account);
    return account;
  }

  findOne({ document }: { document: string }): Account {
    return this.accounts.find((row) => row.getDocument() === document) as Account
  }

  update(account: Account): Account {
    let accountOnStorageIndex = this.accounts.findIndex((i) => i.getDocument() === account.getDocument())

    this.accounts[accountOnStorageIndex] = account;

    return account
  }
}