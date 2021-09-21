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
  id: number | any;
  areaId: number| any;
  area: number | any;

  constructor(private apollo: Apollo,private areasService: AreasService) { }
  cityAreaListQuery(){
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
  }
  outletAreaListQuery(){
    this.apollo
    .watchQuery({
      query: gql`{
        getOutletAreas{
          area{
            name
            id
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

  onAreaToOutlet(id: any){
    this.id = id;
    this.areaId = id
    if (this.areaId == id) {
      // @ts-ignore
      document.getElementById("areatoout").disabled = false;
    }
  }
  remAreaFromOutlet(id: any) {
    this.id = id;
    this.areaId = id;
    if (this.areaId == id){
      // @ts-ignore
      document.getElementById("rem-button").disabled = false
    }
  }

  areaToOutlet(distance: any,minOrder: any){
    this.area_sub = this.areasService.areaToOutlet(parseInt(distance),parseInt(minOrder),parseInt(this.areaId));
  }
  removeAreaFromOutlet(){
    this.area_rem_sub = this.areasService.removeAreaFromOutlet(parseInt(this.areaId))
  }

  onSave(){
    setTimeout(function()
    { location.reload();
      }, 3000,);
  }
  onExit(){
    setTimeout(function(){ location.reload(); }, 3000);
  }
  ngOnInit(): void {
    //Get City Areas Query
   this.cityAreaListQuery();
    //Get Outlet Areas Query
   this.outletAreaListQuery()

  }

}
