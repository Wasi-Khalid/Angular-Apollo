import { Injectable } from '@angular/core';
import {Apollo, gql} from "apollo-angular";
import {v4 as uuidv4} from "uuid";


const registerDevice = gql`
  mutation registerDevice(
    $type: String!,
    $manufacturer: String!,
    $model: String!,
    $appVersion: String!,
    $installationId: String!
  ) {
    registerDevice(device:{
      type: $type,
      manufacturer: $manufacturer,
      model: $model,
      appVersion: $appVersion,
      installationId: $installationId,
    })
  }
`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private data: string | any;
  constructor(private apollo: Apollo) { }

  loginAuth() {
    this.apollo.mutate({
      mutation: registerDevice,
      variables: {
        type: "web",
        manufacturer: "",
        model: "",
        appVersion: "1.0",
        installationId: `${uuidv4()}`,
      }
    }).subscribe(({ data }) => {
      // @ts-ignore
      localStorage.setItem("Token" , data.registerDevice);
      console.log('Token Generated')
    },(error) => {
      console.log('there was an error sending the query', error);
    });
  }
}


