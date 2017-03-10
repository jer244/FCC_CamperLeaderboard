import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cl-header',
  templateUrl: './header.component.html',
  styles: [`
    .logo {
      max-height:90%;
    }
    .header {
      background-color: #006400;
      height: 50px;
      width: 100%;
    }
    `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
