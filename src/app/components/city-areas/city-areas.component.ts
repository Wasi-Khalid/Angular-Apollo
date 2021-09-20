import { Component, OnInit } from '@angular/core';
import {Apollo, gql} from "apollo-angular";
import {AreasService} from "../../services/areas/areas.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-city-areas',
  templateUrl: './city-areas.component.html',
  styleUrls: ['./city-areas.component.scss']
})
export class CityAreasComponent implements OnInit {

  getCityAreas: any[] | any;
  getOutletAreas: any[] | any;
  area_sub: Subscription | any;
  area_rem_sub: Subscription | any;
  loading = true;
  error: any;


  constructor(private apollo: Apollo,private areasService: AreasService) { }



  areaToOutlet(distance: any,minOrder: any){
    this.area_sub = this.areasService.areaToOutlet(parseInt(distance),parseInt(minOrder));
  }
  removeAreaFromOutlet(areaId: any){
    this.area_rem_sub = this.areasService.removeAreaFromOutlet(parseFloat(areaId))
  }

  ngOnInit(): void {
    //Get City Areas Query
    this.apollo
    .watchQuery({
      query: gql`
        {
          getCityAreas{
            name
            id
          }
        }
      `,
    })
    .valueChanges.subscribe((result: any) => {
      this.getCityAreas = result?.data?.getCityAreas;
      this.loading = result.loading;
      this.error = result.error;
    });
    //Get Outlet Areas Query
    this.apollo
      .watchQuery({
        query: gql`{
          getOutletAreas{
              area{
                  name
              }
              distance
              minOrder
          }
        }`
      })
    .valueChanges.subscribe((result:any) => {
      this.getOutletAreas = result?.data?.getOutletAreas;
      this.loading = result.loading;
      this.error = result.error;
    });
  }

}
