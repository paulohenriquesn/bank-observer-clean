export interface UseCaseProtocol<I,O> {
  execute(i: I): O
};