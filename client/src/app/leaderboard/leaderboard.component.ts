import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { StatsService } from './../services/stats.service';

@Component({
    selector: 'app-leaderboard',
    templateUrl: './leaderboard.component.html',
    styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {
    public userInfo: User[];
    public currentUserName: string;

    constructor(private statsService: StatsService) {
        this.currentUserName = statsService.userName;
    }

    ngOnInit() {
        this.statsService.getLeaderboard().subscribe(x => (this.userInfo = x));
    }
}
