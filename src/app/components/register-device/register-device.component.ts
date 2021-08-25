import { Component, OnInit } from '@angular/core';
import {Apollo, gql} from "apollo-angular";
import {v4 as uuidv4} from 'uuid';


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


@Component({
  selector: 'app-register-device',
  templateUrl: './register-device.component.html',
  styleUrls: ['./register-device.component.scss']
})
export class RegisterDeviceComponent implements OnInit {

  loading = true;
  error: any;

  constructor(private apollo: Apollo) { }


  ngOnInit(): void {
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
      localStorage.setItem(data , data.registerDevice);
      console.log('Token Generated')
    },(error) => {
      console.log('there was an error sending the query', error);
    });
  }

}
