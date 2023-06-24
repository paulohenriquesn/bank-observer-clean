import { describe, test, expect } from '@jest/globals';
import { FakeAccountRepository } from "../mocks/repositories/account.repository"
import { CreateAccount } from '../../src/app/usecases/account/create.case';

describe('create account workflow', () => {
  const useCase = new CreateAccount(FakeAccountRepository)

  test('expect to throws if no document has provided', () => {
    useCase.execute({
      document: ''
    }).catch(threw => {
      expect(threw).toBeInstanceOf(Error)
    })
  })

  test('expect repository has been called', async () => {
    await useCase.execute({
      document: 'fakeDocument'
    })
    expect(FakeAccountRepository.save).toHaveBeenCalled()
  })
})