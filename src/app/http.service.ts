import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getAlltimeData() {
    return this.http.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
      .map((response: Response) => response.json());
  }

  getRecentData() {
    return this.http.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .map((response: Response) => response.json());
  }

}
