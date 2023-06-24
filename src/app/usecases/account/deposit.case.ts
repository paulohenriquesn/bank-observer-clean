import { Account } from "../../../domain/entities/account.entity";
import { Repository } from "../../../domain/protocols/repository.protocol";
import { UseCaseProtocol } from "../../../domain/protocols/usecase.protocol";

type InputDeposit = {
  amount: number;
  document: string;
}

type OutputDeposit = Promise<Account>

export class Deposit implements UseCaseProtocol<InputDeposit, OutputDeposit> {
  constructor(
    private readonly accountRepository: Repository<Account>
  ) {}
  
  async execute({ document, amount }: InputDeposit): OutputDeposit {
    const account = await this.accountRepository.findOne({
      document
    })
    
    account.deposit(amount);
    
    await this.accountRepository.update(account);

    return account;
  }
}