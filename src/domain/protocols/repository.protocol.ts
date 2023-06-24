export interface Repository<E> {
  save(i: E): E;
  findOne(i: unknown): E,
  update(i: E): E
}