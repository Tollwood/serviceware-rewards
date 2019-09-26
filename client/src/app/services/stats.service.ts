import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private httpClient: HttpClient) {}

  public getStats(userId: number) {
    return this.httpClient
      .get('<URL here>')
      .pipe(map(x => new User(x)));
  }

  public getLeaderboard() {
    return this.httpClient
      .get('<URL here>')
      .pipe(map((x: Array<any>) => x.map(y => new User(y))));
  }
}
