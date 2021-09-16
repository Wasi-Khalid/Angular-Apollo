import {Injectable, OnInit} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../../services/auth/auth.service";


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router:Router ,
    private auth_service: AuthService
  ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (localStorage.getItem("Auth")) {
      this.router.navigate([''])
    } else {
      this.router.navigate(['login']);
        console.log("Invalid Authentication")
    }

    if (localStorage.getItem("Reg_Token")) {
      return true;
    } else {
      this.router.navigate(['login']);
      console.log("User not found")
      return false;
    }
  }

  ngOnInit(): void {
  }

}
