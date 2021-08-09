import { Component, OnInit } from '@angular/core';
import {Apollo, gql} from "apollo-angular";

@Component({
  selector: 'exchange-rates',
  template: `
    <div *ngIf="loading">
      Loading...
    </div>
    <div *ngIf="error">
      Error :(
    </div>
    <div *ngIf="getBrandsList">
      <div *ngFor="let item of getBrandsList">
        <p>{{ item.id }}: {{ item.name }}</p>
      </div>
    </div>
  `,
})
export class DashboardComponent implements OnInit {

  getBrandsList: any[] | any;
  loading = true;
  error: any;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo
    .watchQuery({
      query: gql`
        {
          getBrandsList{
            id
            name
          }
        }
      `,
    })
    .valueChanges.subscribe((result: any) => {
      this.getBrandsList = result?.data?.getBrandsList;
      this.loading = result.loading;
      this.error = result.error;
    });
  }
}

