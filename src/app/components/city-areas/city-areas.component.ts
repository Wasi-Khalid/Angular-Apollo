import { Component, OnInit } from '@angular/core';
import {Apollo, gql} from "apollo-angular";

@Component({
  selector: 'app-city-areas',
  templateUrl: './city-areas.component.html',
  styleUrls: ['./city-areas.component.scss']
})
export class CityAreasComponent implements OnInit {

  getCityAreas: any[] | any;
  loading = true;
  error: any;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo
    .watchQuery({
      query: gql`
        {
          getCityAreas{
            name
          }
        }
      `,
    })
    .valueChanges.subscribe((result: any) => {
      this.getCityAreas = result?.data?.getCityAreas;
      this.loading = result.loading;
      this.error = result.error;
    });
  }

}
