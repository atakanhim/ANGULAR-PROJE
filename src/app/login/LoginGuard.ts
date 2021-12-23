import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AccountService } from "../services/account.service";
import { AlertifyService } from "../services/alertify.service";

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private accountService:AccountService,private alertifyService:AlertifyService, private router:Router){
        
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let logged = this.accountService.isLoggedIn();// bunun yerine adminmi diye sorarız
        let admin = this.accountService.isAdminIn();;

         if(logged && admin){        
            return true
         }
         else if(logged && route.routeConfig?.path=="app-checkout"){
             return true;
         }
         else if(route.routeConfig?.path=="app-checkout")
            this.alertifyService.error("Lütfen Önce Giriş Yapınız");
         else
            this.alertifyService.error("Bu Sayfaya Girmek Icin Admin Olmaniz Gerekyior");

         this.router.navigate(["login"]);
         return false;
    }
}
