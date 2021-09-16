import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'exchange-rates',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']

})
export class DashboardComponent implements OnInit,OnDestroy {


  constructor() { }

  ngOnInit(): void {

  }
  ngOnDestroy() {
    localStorage.removeItem("Reg_Token");
    localStorage.clear();
  }
}

