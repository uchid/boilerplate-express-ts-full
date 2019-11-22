import { User, UserDomainHash } from '../../../domain/model/User';

export class UserSerializer {
  static serialize(user: User | null): UserDomainHash | null {
    if (!user) {
      return null;
    }
    return user.toHash();
  }
}
