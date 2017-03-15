import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';
import { Leader } from '../leader';

@Component({
  selector: 'cl-leader-table',
  templateUrl: './leader-table.component.html',
  styleUrls: ['./leader-table.component.css']
})

export class LeaderTableComponent implements OnInit {

  alltime: boolean;

  alltimeLeaders: Leader[];

  recentLeaders: Leader[];

  constructor(private httpService: HttpService) {
    this.alltime = true;
   }

  ngOnInit() {
    this.httpService.getAlltimeData()
      .subscribe(
        (data: any) => this.alltimeLeaders = data.slice(0, 100)
      );

    this.httpService.getRecentData()
      .subscribe(
        (data: any) => this.recentLeaders = data.slice(0, 100)
      );
  }

  toggle(alltime: boolean) {
    this.alltime = alltime;
  }
}
