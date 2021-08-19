import { Component, OnInit } from '@angular/core';
import {Apollo, gql} from "apollo-angular";

@Component({
  selector: 'app-brandlist',
  templateUrl: './brandlist.component.html',
  styleUrls: ['./brandlist.component.scss']
})
export class BrandlistComponent implements OnInit {

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
