import { User } from '../../../domain/model/User';

export class UserSerializer {
  static serialize(user: User | null) {
    if (!user) {
      return null;
    }
    return user.toHash();
  }
}
