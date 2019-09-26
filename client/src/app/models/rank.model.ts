export class Rank {
	public id: number;
	public minXp: number;
	public maxXp: number;
	public rank: string;

	constructor(init?: Partial<Rank>) {
		Object.assign(this, init);
	}
}
