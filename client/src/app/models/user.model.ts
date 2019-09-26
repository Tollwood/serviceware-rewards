import { Rank } from './rank.model';

export class User {
	public username: string;
	public rank: Rank;
	public xp: number;
	public pictureUrl: string;

	constructor(init?: Partial<User>) {
		Object.assign(this, init);
	}
}
