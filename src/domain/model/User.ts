export class User {
  // private isActivate: boolean;
  constructor(
    private name: string,
    private birthday: Date,
    private id: string | undefined = undefined,
    private updatedAt: Date | undefined = undefined,
    private createdAt: Date | undefined = undefined,
    private isActivate: boolean = true,
  ) {
    if (!this.name) {
      throw new Error('user name must to be 1 or more characters');
    }
  }

  isUserActivate(): boolean {
    return this.isActivate;
  }

  calculateAge() {
    const tmp = [this.birthday, this.id, this.createdAt, this.updatedAt];
    // do something
    return tmp;
  }

  toHash() {
    return {
      name: this.name,
      birthday: this.birthday,
      id: this.id,
      updatedAt: this.updatedAt,
      createdAt: this.createdAt,
      isActive: this.isActivate,
    };
  }
}
