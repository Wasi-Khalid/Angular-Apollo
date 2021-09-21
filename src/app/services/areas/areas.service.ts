import { Injectable } from '@angular/core';
import {Apollo, gql} from "apollo-angular";

const addAreaToOutlet = gql`
  mutation addAreaToOutlet(
    $distance: Float,
    $minOrder: Float,
    $areaId: Float!
  ){
    addAreaToOutlet(details:{
      distance: $distance
      minOrder: $minOrder
      areaId: $areaId
    }){
      id
      name
    }
  }
`;
const removeAreaFromOutlet = gql`
    mutation removeAreaFromOutlet(
      $areaId: Float!
    ){
      removeAreaFromOutlet(areaId: $areaId)
    }
`

@Injectable({
  providedIn: 'root'
})
export class AreasService {
  private areaData: any;

  constructor(private apollo: Apollo,) { }

  areaToOutlet(distance: any,minOrder: any, areaId:any){
    this.apollo.mutate({
      mutation: addAreaToOutlet,
      variables:{
        distance: distance,
        minOrder: minOrder,
        areaId: areaId
      }
    }).subscribe(({data}) => {
     this.areaData = data
    })
  }
  removeAreaFromOutlet(areaId: any){
    this.apollo.mutate({
      mutation: removeAreaFromOutlet,
      variables: {
        areaId: areaId
      }
    }).subscribe(({data}) => {
      this.areaData = data
    })
  }
}
