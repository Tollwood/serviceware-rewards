import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
	providedIn: 'root'
})
export class StatsService {
	constructor(private httpClient: HttpClient) {}

	public userName = 'Test User 2';

	public getStats(userId: number) {
		return of(
			new User({
				username: 'Paul Pennec',
				rank: {
					id: 0,
					minXp: 100,
					maxXp: 200,
					rank: 'Level 1'
				},
				xp: 200,
				pictureUrl: 'https://s.cdpn.io/profiles/user/777898/512.jpg?1'
			})
		);
		// return this.httpClient
		//   .get('<URL here>')
		//   .pipe(map(x => new User(x)));
	}

	public getLeaderboard() {
		// return this.httpClient
		//   .get('<URL here>')
		//   .pipe(map((x: Array<any>) => x.map(y => new User(y))));
		return of(new Array<User>());
		// return of(
		// 	[
		// 		new User({
		// 			username: 'Test User 1',
		// 			rank: 'Rank 3',
		// 			pictureUrl:
		// 				'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/935bd762733715.5a999400642f7.png',
		// 			xp: 849,
		// 			xpPrev: 750,
		// 			xpNext: 1000
		// 		}),
		// 		new User({
		// 			name: 'Test User 2',
		// 			rank: 'Rank 1',
		// 			pictureUrl:
		// 				'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/96045044-65da-487c-a1c0-30d119cef1de/dbq41xc-4e0af3d3-b44e-4a4e-9fbd-fca258a566d6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk2MDQ1MDQ0LTY1ZGEtNDg3Yy1hMWMwLTMwZDExOWNlZjFkZVwvZGJxNDF4Yy00ZTBhZjNkMy1iNDRlLTRhNGUtOWZiZC1mY2EyNThhNTY2ZDYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jm3vgqTKfdeDtQIVn4hou_uE5DlUFuwEjFhRtN-CBcI',
		// 			xp: 5,
		// 			xpPrev: 0,
		// 			xpNext: 250
		// 		}),
		// 		new User({
		// 			name: 'Test User 3',
		// 			rank: 'Rank 10',
		// 			pictureUrl:
		// 				'https://preview.redd.it/m623uz5qbv921.jpg?width=960&crop=smart&auto=webp&s=8c6fcfc144275e32057e8ec387cb2da5885b5945',
		// 			xp: 2899,
		// 			xpPrev: 2500,
		// 			xpNext: 3000
		// 		})
		// 	].sort((a, b) => b.xp - a.xp)
		// );
	}
}
