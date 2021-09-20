import { Injectable } from '@angular/core';
import {Apollo, gql} from "apollo-angular";

const addAreaToOutlet = gql`
  mutation addAreaToOutlet(
    $distance: Float,
    $minOrder: Float,
  ){
    addAreaToOutlet(details:{
      distance: $distance
      minOrder: $minOrder
      areaId: 234
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

  areaToOutlet(distance: any,minOrder: any){
    this.apollo.mutate({
      mutation: addAreaToOutlet,
      variables:{
        distance: distance,
        minOrder: minOrder,
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
     console.log(data)
    })
  }
}
