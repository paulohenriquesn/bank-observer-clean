export class MissingParamException extends Error {
  constructor(param: string) {
    super("Missing param " + param)
  }
}