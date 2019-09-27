import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Activity } from '../models/activity.model';
import { User } from '../models/user.model';

@Injectable({
	providedIn: 'root'
})
export class StatsService {
	constructor(private httpClient: HttpClient) {}

	public userName = 'Anna';

	public getStats(userId: number) {
		return this.httpClient
			.get(`https://serviceware-rewards.herokuapp.com/users/${this.userName}`)
			.pipe(map((x) => new User(x)));
	}

	public getLeaderboard() {
		return this.httpClient
			.get('https://serviceware-rewards.herokuapp.com/users')
			.pipe(map((x: Array<any>) => x.map((y) => new User(y)).sort((a, b) => b.xp - a.xp)));
	}

	public getActivities() {
		return (
			this.httpClient
				.get(`https://serviceware-rewards.herokuapp.com/users/${this.userName}/events`)
				// .get('https://serviceware-rewards.herokuapp.com/users/Jens/events')
				.pipe(map((x: Array<Activity>) => x.map((y) => new Activity(y))))
		);
	}
}
