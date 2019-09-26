import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user.model';
import { StatsService } from '../services/stats.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  userId : number = 123;
  currentUser : Observable<User>;
  tag : string = 'XP';
  progressBarPercentage : string;

  tempUser : User = new User(
    {
      name : 'Loic Pennec',
      rank : 'Dungeon Master',
      xp : 125,
      xpNext : 200,
      xpPrev : 100,
      pictureUrl : 'https://s.cdpn.io/profiles/user/777898/512.jpg?1'
    }
  );

  constructor(private statsService : StatsService) {  
      //this.currentUser = statsService.getStats(this.userId); 
      this.currentUser = of(this.tempUser);
      this.progressBarPercentage = (this.tempUser.xp - this.tempUser.xpPrev) * 100 / (this.tempUser.xpNext - this.tempUser.xpPrev) + '%';
      console.log(this.tempUser.xp);
      console.log(this.tempUser.xpNext);
      console.log(this.tempUser.xpPrev);
      console.log(this.progressBarPercentage);
  }

  ngOnInit() {
    /*this.statsService.getStats(this.userId).subscribe(
      (data) => {
        this.currentUser = of(data);
        this.progressBarPercentage = (this.tempUser.xp - this.tempUser.xpPrev) * 100 / (this.tempUser.xpNext - this.tempUser.xpPrev) + '%';
      }
    );*/
  }

}
