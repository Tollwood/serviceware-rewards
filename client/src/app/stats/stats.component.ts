import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  users : User[] = [{
    name : 'Loic',
    title : 'Master',
    currentXp : 1,
    previousLevelXp : 2,
    nextLevelXp : 3,
  }];

  curretUser : User = this.users[0];

  constructor() { }

  ngOnInit() {
  }

}
