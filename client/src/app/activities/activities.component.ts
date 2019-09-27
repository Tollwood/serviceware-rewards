import { Component, OnInit } from '@angular/core';
import { Activity } from './../models/activity.model';
import { StatsService } from './../services/stats.service';

@Component({
	selector: 'app-activities',
	templateUrl: './activities.component.html',
	styleUrls: [ './activities.component.scss' ]
})
export class ActivitiesComponent implements OnInit {
	public activities: Activity[];

	constructor(private _statsService: StatsService) {}

	ngOnInit() {
		this._statsService.getActivities().subscribe((x: Activity[]) => (this.activities = x));
	}
}
