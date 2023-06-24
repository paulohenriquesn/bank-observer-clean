import {jest} from '@jest/globals'
import { Account } from 'src/domain/entities/account.entity'
import { Repository } from 'src/domain/protocols/repository.protocol'

export const FakeAccountRepository: Repository<Account> = {
  save: jest.fn() as (i: Account) => Account,
  findOne: jest.fn() as (i: {document: string}) => Account,
  update: jest.fn() as (i: Account) => Account
}