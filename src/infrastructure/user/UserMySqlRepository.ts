import { injectable } from 'inversify';

import { User } from '../../domain/model/User';
import { UserRepository } from '../../domain/repository/UserRepository';
import { UserConvert } from './UserConvert';
import { models } from '../database/models';

@injectable()
export class UserMySqlRepository implements UserRepository {
  async create(user: User): Promise<User> {
    const newUser = await models.User.create(user);
    return UserConvert.toEntity(newUser);
  }

  async findById(id: string): Promise<User | null> {
    const user = await models.User.findByPk(id);
    if (user) {
      return UserConvert.toEntity(user);
    }
    return null;
  }

  async fetchAll(): Promise<User[]> {
    const users = await models.User.findAll();
    return users.map(UserConvert.toEntity);
  }

  async update(_user: User): Promise<User> {
    throw new Error('[TODO]');
  }

  async delete(id: string): Promise<void> {
    await models.User.destroy({
      where: { id },
    });
    return;
  }
}
