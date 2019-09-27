import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
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
	@Input('height') height: number = 40;

	userId: number = 123;
	currentUser: User;
	tag: string = 'Reward Points';
	progressBarPercentageString: string;
	progressBarPercentage: number = 0;
	progressTargetBarPercentage: number = 0;

	constructor(private statsService: StatsService, private _dialog: MatDialog) {
	}

	ngOnInit() {
		this.loadData();
		setInterval(() => this.loadData(), 1000);
	}

	public openPoppy(): void {
		this._dialog.open(PoppyComponent, {
			width: '500px',
			autoFocus: false
		});
	}

	private loadData(): void {
		this.statsService.getStats(this.userId).subscribe((data) => {
			this.currentUser = data;
			this.progressTargetBarPercentage =
				(this.currentUser.xp - this.currentUser.rank.minXp) *
					100 /
					(this.currentUser.rank.maxXp - this.currentUser.rank.minXp);
			this.xpUpdate();
		});
	}

	progressBarClass : string = "";
	public xpUpdate(): void {
		console.log(this.progressTargetBarPercentage + " : " + this.progressBarPercentage);
		if (this.progressBarPercentage !== this.progressTargetBarPercentage) {
			this.progressBarClass = "progress-bar-striped progress-bar-animated";
			this.progressBarPercentage = this.progressBarPercentage + Math.ceil((this.progressTargetBarPercentage - this.progressBarPercentage) / 10);
			this.progressBarPercentageString = this.progressBarPercentage + "%";
			setTimeout(
				() => {
					this.xpUpdate();
				},
				10
			)
		} else {
			this.progressBarClass = "";
		}
	}
}
