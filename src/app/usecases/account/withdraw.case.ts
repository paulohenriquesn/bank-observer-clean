import { Account } from "../../../domain/entities/account.entity";
import { Repository } from "../../../domain/protocols/repository.protocol";
import { UseCaseProtocol } from "../../../domain/protocols/usecase.protocol";

type InputWithdraw = {
  amount: number;
  document: string;
}

type OutputWithdraw = Promise<Account>

export class Withdraw implements UseCaseProtocol<InputWithdraw, OutputWithdraw> {
  constructor(
    private readonly accountRepository: Repository<Account>
  ) {}
  
  async execute({ document, amount }: InputWithdraw): OutputWithdraw { 
    const account = await this.accountRepository.findOne({
      document
    })

    account.withdraw(amount);
    
    await this.accountRepository.update(account);

    return account;
  }
}