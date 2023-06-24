export class UserHasNoBalanceSufficientException extends Error {
  constructor() {
    super("You don't have a sufficient balance to withdraw")
  }
}