import { Component, Input, OnInit } from '@angular/core';
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
	@Input('color') color: string = '#007bff';

	userId: number = 123;
	currentUser: User;
	tag: string = 'XP';
	progressBarPercentageString: string;
	progressBarPercentage: number = 0;
	progressTargetBarPercentage: number = 0;
	leaderboardRank: number = 2;
	helmetPath : string;
	helmetRank1 : string = "./assets/crown.png"; 
	helmetRank2 : string = "./assets/viking.png"; 
	helmetRank3 : string = "./assets/strawhat.png"; 
	helmetRankOther : string = "./assets/blank.png"; 

	
	constructor(private statsService: StatsService, private _dialog: MatDialog) {
	}

	ngOnInit() {
		this.loadData();
		setInterval(() => this.loadData(), 1000);
	}

	public openPoppy(): void {
		this._dialog.open(PoppyComponent, {
<<<<<<< HEAD
			width: '500px',
=======
			width: '600px',
>>>>>>> Store
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
			this.helmetUpdate();
			
		});
	}

	progressBarClass: string = '';
	public xpUpdate(): void {
		if (this.progressBarPercentage !== this.progressTargetBarPercentage) {
			this.progressBarClass = 'progress-bar-striped progress-bar-animated';
			this.progressBarPercentage =
				this.progressBarPercentage +
				Math.ceil((this.progressTargetBarPercentage - this.progressBarPercentage) / 10);
			this.progressBarPercentageString = this.progressBarPercentage + '%';
			setTimeout(() => {
				this.xpUpdate();
			}, 10);
>>>>>>> Store
		} else {
			this.progressBarClass = '';
		}
	}

	public helmetUpdate(){
		switch(this.leaderboardRank) { 
			case 1: { 
				this.helmetPath = this.helmetRank1;
			   	break; 
			} 
			case 2: { 
				this.helmetPath = this.helmetRank2;
			   break; 
			} 
			case 3: {
				this.helmetPath = this.helmetRank3;
				break;
			}
			default: { 
				this.helmetPath = this.helmetRankOther;
			   break; 
			} 
		 } 
	}
}
