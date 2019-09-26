import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { User } from '../models/user.model';
import { PoppyComponent } from '../poppy/poppy.component';
import { StatsService } from '../services/stats.service';

@Component({
	selector: 'app-stats',
	templateUrl: './stats.component.html',
	styleUrls: [ './stats.component.scss' ]
})
export class StatsComponent implements OnInit {
	userId: number = 123;
	currentUser: User;
	tag: string = 'XP';
	progressBarPercentage: string;
	// private timerId: NodeJS.Timer;

	constructor(private statsService: StatsService, private _dialog: MatDialog) {
		// this.currentUser = statsService.getStats(this.userId);
		// this.progressBarPercentage =
		//     (this.currentUser.xp - this.tempUser.xpPrev) * 100 / (this.tempUser.xpNext - this.tempUser.xpPrev) + '%';
	}

	ngOnInit() {
		this.loadData();
		setInterval(() => this.loadData(), 1000);
	}

	// ngOnDestroy(): void {
	// 	clearTimeout(this.timerId);
	// }

	public openPoppy(): void {
		this._dialog.open(PoppyComponent, {
			width: '400px',
			autoFocus: false
		});
	}

	private loadData(): void {
		this.statsService.getStats(this.userId).subscribe((data) => {
			this.currentUser = data;
			this.progressBarPercentage =
				(this.currentUser.xp - this.currentUser.rank.minXp) *
					100 /
					(this.currentUser.rank.maxXp - this.currentUser.rank.minXp) +
				'%';
		});
	}
}
