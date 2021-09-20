import { Injectable } from '@angular/core';
import {Apollo, gql} from "apollo-angular";
import {v4 as uuidv4} from "uuid";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";


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
const authenticate = gql`
  mutation authentication(
    $password: String!,
    $email: String!
  ){
    authenticate(password:$password,email:$email){
      id
      createdAt
      type
      name
      email
      verified
    }
  }
`;


@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(
    private apollo: Apollo,
    private http: HttpClient,
    private router: Router
) { }



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
      const Token = data.registerDevice
      localStorage.setItem("Reg_Token" , `${Token}` );
      console.log('Token Generated');
    },(error) => {
      console.log('there was an error sending the query', error);
    });
  }



  onlogin(password: any, email: any) {
    this.apollo.mutate({
      mutation: authenticate,
      variables: {
        password: `${password}`,
        email: `${email}`,
      }
    }).subscribe(({ data }) => {
      // @ts-ignore
      const auth = JSON.stringify(data.authenticate)
      localStorage.setItem("Auth" , `${auth}`);
      console.log('User Verified');
      setTimeout(() => {
        this.router.navigate([""])
      }, 5000);

    },(error) => {
      console.log('there was an error sending the mutation', error);
    });
  }


}


