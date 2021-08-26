import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";


@Component({
  selector: 'app-register-device',
  templateUrl: './register-device.component.html',
  styleUrls: ['./register-device.component.scss']
})
export class RegisterDeviceComponent implements OnInit {

  loading = true;
  error: any;

  constructor(private auth_service: AuthService) { }


  ngOnInit() {

  }

}
