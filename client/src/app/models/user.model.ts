
export class User {
  public name: string;
  public rank: string;
  public xp: number;
  public xpNext: number;
  public xpPrev: number;
  public pictureUrl: string;

  constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}
