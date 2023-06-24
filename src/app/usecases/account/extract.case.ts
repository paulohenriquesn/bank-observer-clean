import { Account } from "../../../domain/entities/account.entity";
import { Repository } from "../../../domain/protocols/repository.protocol";
import { UseCaseProtocol } from "../../../domain/protocols/usecase.protocol";

type InputExtract = {
  document: string;
}

type OutputExtract = Promise<string[]>

export class Extract implements UseCaseProtocol<InputExtract, OutputExtract> {
  constructor(
    private readonly accountRepository: Repository<Account>
  ) {}
  
  async execute({ document }: InputExtract): OutputExtract {
    const account = await this.accountRepository.findOne({
      document
    })

    console.log(account.getExtract())
    
    return account.getExtract();
  }
}