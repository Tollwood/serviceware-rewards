export class Product {
	public leaderboardrank: number;
    public name: string;
    public description: string;
    public imagePath: string;

	constructor(init?: Partial<Product>) {
		Object.assign(this, init);
	}
}
