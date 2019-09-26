
export class User {
  public name: string;
  public title: string;
  public currentXp: number;
  public previousLevelXp: number;
  public nextLevelXp: number;

  constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}
