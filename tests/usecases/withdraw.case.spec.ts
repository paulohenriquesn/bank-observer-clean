import {describe, expect, test, jest} from '@jest/globals';
import { FakeAccountRepository } from "../mocks/repositories/account.repository"
import { Account } from '../../src/domain/entities/account.entity';
import { Withdraw } from '../../src/app/usecases/account/withdraw.case';

describe('withdraw workflow', () => {
  const useCase = new Withdraw(FakeAccountRepository)

  test('If some account withdraw a value has to update entity', async() => {
    jest.spyOn(FakeAccountRepository, 'findOne').mockResolvedValueOnce(new Account("fakeDocument", 10) as never)

    let sut = await useCase.execute({ document: 'fakeDocument', amount: 5 })

    expect(sut.getBalance()).toBe(5)
    expect(FakeAccountRepository.update).toHaveBeenCalled()
  })
  
  test('If some account withdraws a value greater than he has on account has to throws', () => {
    jest.spyOn(FakeAccountRepository, 'findOne').mockResolvedValueOnce(new Account("fakeDocument", 5) as never)
    useCase.execute({ document: 'fakeDocument', amount: 10 }).catch(threw => {
      expect(threw).toBeInstanceOf(Error)
    })
  })

  test('If some account withdraws a invalid value has to throws', () => {
    const sut = useCase;
    sut.execute({ document: 'fakeDocument', amount: -1 }).catch((threw) => {
      expect(threw).toBeInstanceOf(Error)
    })

    sut.execute({ document: 'fakeDocument', amount: 0 }).catch((threw) => {
      expect(threw).toBeInstanceOf(Error)
    })
  })
})