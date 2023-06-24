export interface Observer {
  next(event: unknown): void
}

export interface Observable {
  emit(event: unknown): void
  addObserver(observer: Observer): void
  removeObserver(observer: Observer): void
}