import { describe, test, expect, jest } from '@jest/globals';
import { FakeAccountRepository } from "../mocks/repositories/account.repository"
import { Extract } from '../../src/app/usecases/account/extract.case';
import { Account } from '../../src/domain/entities/account.entity';

describe('extract workflow', () => {
  const useCase = new Extract(FakeAccountRepository)
  test('expect repository has been called and returns a extract', async () => {
    jest.spyOn(FakeAccountRepository, 'findOne').mockResolvedValueOnce(new Account('fakeDocument') as never)
    const extract = await useCase.execute({
      document: 'fakeDocument'
    })
    expect(extract.length).toBe(1)
    expect(FakeAccountRepository.findOne).toHaveBeenCalled()
  })
})