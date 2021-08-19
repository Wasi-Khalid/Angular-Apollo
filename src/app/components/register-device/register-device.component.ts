import { Component, OnInit } from '@angular/core';
import {Apollo, gql} from "apollo-angular";


const registerDevice = gql`
  mutation registerDevice {
    registerDevice(device:{
      type:"new",
      manufacturer:"2012",
      model: "none",
      appVersion:"none",
      installationId: "none"
    })
  }
`;


@Component({
  selector: 'app-register-device',
  templateUrl: './register-device.component.html',
  styleUrls: ['./register-device.component.scss']
})
export class RegisterDeviceComponent implements OnInit {

  registerData: any[] | any;
  loading = true;
  error: any;


  constructor(private apollo: Apollo) { }
  registerFunction() {
    this.apollo.mutate({
      mutation: registerDevice,
    }).subscribe(({ data }) => {
      // @ts-ignore
      console.log('got data', data.registerDevice);
      // @ts-ignore
      document.getElementById('data').innerHTML = data.registerDevice
    },(error) => {
      console.log('there was an error sending the query', error);
    });
  }

  ngOnInit(): void {

  }

}
