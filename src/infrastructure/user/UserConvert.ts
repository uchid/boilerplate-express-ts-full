import { User } from '../../domain/model/User';

export const UserConvert = {
  toEntity(dataValue: UserDataParams): User {
    const { name, birthday, id, updatedAt, createdAt } = dataValue;
    return new User(name, birthday, id, updatedAt, createdAt);
  },
};

interface UserDataParams {
  name: string;
  birthday: Date;
  id?: string;
  updatedAt?: Date;
  createdAt?: Date;
}
