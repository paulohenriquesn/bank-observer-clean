import {describe, expect, test, jest} from '@jest/globals';
import { Deposit } from "../../src/app/usecases/account/deposit.case"
import { FakeAccountRepository } from "../mocks/repositories/account.repository"
import { Account } from '../../src/domain/entities/account.entity';

describe('deposit workflow', () => {
  const useCase = new Deposit(FakeAccountRepository)

  test('If some account deposits a value has to update entity', async() => {
    jest.spyOn(FakeAccountRepository, 'findOne').mockResolvedValueOnce(new Account("fakeDocument") as never)

    let sut = await useCase.execute({ document: 'fakeDocument', amount: 10 })

    expect(sut.getBalance()).toBe(10)
    expect(FakeAccountRepository.update).toHaveBeenCalled()
  })

  test('If some account deposits a invalid value has to throws', () => {
    const sut = useCase;
    sut.execute({ document: 'fakeDocument', amount: -1 }).catch((threw) => {
      expect(threw).toBeInstanceOf(Error)
    })

    sut.execute({ document: 'fakeDocument', amount: 0 }).catch((threw) => {
      expect(threw).toBeInstanceOf(Error)
    })
  })
})