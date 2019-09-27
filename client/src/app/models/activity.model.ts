import { Reward } from './reward.model';
import { User } from './user.model';

export class Activity {
	public id: number;
	public rewardEventType: Reward;
	public user: User;
	public timestamp: Date;

	constructor(init?: Partial<Activity>) {
		Object.assign(this, init);
	}
}
