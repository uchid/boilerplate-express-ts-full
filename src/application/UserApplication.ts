import { injectable, inject } from 'inversify';
import momentTimezone from 'moment-timezone';

import { TYPES } from '@/registry/types';
import { UserRepository } from '../domain/repository/UserRepository';
import { User } from '../domain/model/User';

@injectable()
export class UserApplication {
  constructor(
    @inject(TYPES.UserRepository) private userRepository: UserRepository,
  ) {}

  async fetchUserInfo(id: string) {
    const user = await this.userRepository.findById(id);
    // do something more
    return user;
  }

  async createUser(name: string, birthday: string) {
    const user = new User(name, momentTimezone(birthday).toDate());
    return await this.userRepository.create(user);
  }
}
