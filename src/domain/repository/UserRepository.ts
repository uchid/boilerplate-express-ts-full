import { User } from '../model/User';

export interface UserRepository {
  create(user: User): Promise<User>;
  findById(id: string): Promise<User | null>;
  fetchAll(): Promise<User[]>;
  update(user: User): Promise<User>;
  delete(id: string): Promise<void>;
}
