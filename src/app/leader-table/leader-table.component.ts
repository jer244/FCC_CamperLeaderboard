import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { HttpService } from '../http.service';

@Component({
  selector: 'cl-leader-table',
  templateUrl: './leader-table.component.html',
  styleUrls: ['./leader-table.component.css']
})

export class LeaderTableComponent implements OnInit {

  constructor(private httpService: HttpService) {};

  alltime: boolean = true;

  alltimeLeaders: JSON[] = [];

  recentLeaders: JSON[] = [];

  ngOnInit() {
    this.httpService.getAlltimeData()
      .subscribe(
        (data: any) => this.alltimeLeaders = data.slice(0, 100)
      )

    this.httpService.getRecentData()
      .subscribe(
        (data: any) => this.recentLeaders = data.slice(0, 100)
      )
  }

  toggle() {
    if(this.alltime){
      this.alltime=false;
    }else
    this.alltime=true;
  }
}
