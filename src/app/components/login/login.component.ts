import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";
import {Subscription} from "rxjs";
import {NgxSpinnerService} from "ngx-spinner";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,OnDestroy {

  reg_sub: Subscription | any;
  email: any;
  password: any;

  constructor(
    private router: Router,
    private auth_service: AuthService,
    private spinner: NgxSpinnerService
  ) { }

  onClick(password: any, email: any){
    this.reg_sub = this.auth_service.onlogin(password,email);
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
  }

  ngOnInit() {
    // @ts-ignore
    this.reg_sub = this.auth_service.loginAuth();

    // @ts-ignore
    if (localStorage.getItem("Token")) {
      this.router.navigate(['']);
    }
  }
  ngOnDestroy() {
    if (this.reg_sub) {
      this.reg_sub.unsubscribe()
    }
  }


}
