import { Observable, Observer } from "../domain/protocols/observer.protocol";

export class AccountObservable implements Observable {
  private observers: Observer[] = []

  addObserver(observer: Observer): void {
    this.observers.push(observer)
  }
  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter((f) => f != observer)
  }

  async emit(event: unknown) {
    this.observers.forEach(async (observer) => {
      await observer.next(event)
    })
  }
}