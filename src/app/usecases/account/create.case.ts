import { MissingParamException } from "../../../app/exceptions/MissingParam.exception";
import { Account } from "../../../domain/entities/account.entity";
import { Repository } from "../../../domain/protocols/repository.protocol";
import { UseCaseProtocol } from "../../../domain/protocols/usecase.protocol";

type InputCreateAccount = {
  document: string;
}

type OutputCreateAccount = Promise<Account>

export class CreateAccount implements UseCaseProtocol<InputCreateAccount, OutputCreateAccount> {
  constructor(
    private readonly accountRepository: Repository<Account>
  ) {}
  
  async execute({ document }: InputCreateAccount): OutputCreateAccount {
    if(!document) throw new MissingParamException('document')
   return await this.accountRepository.save(new Account(document));
  }
}