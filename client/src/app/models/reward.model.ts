export class Reward {
	public id: string;
	public xp: number;

	constructor(init?: Partial<Reward>) {
		Object.assign(this, init);
	}
}
