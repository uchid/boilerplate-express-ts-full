import { Container } from 'inversify';
import { TYPES } from './types';

import { UserRepository } from '../domain/repository/UserRepository';
import { UserMySqlRepository } from '../infrastructure/user/UserMySqlRepository';
import { UserApplication } from '../application/UserApplication';

const container = new Container();
container.bind<UserRepository>(TYPES.UserRepository).to(UserMySqlRepository);
container.bind<UserApplication>(TYPES.UserApplication).to(UserApplication);

export { container };
