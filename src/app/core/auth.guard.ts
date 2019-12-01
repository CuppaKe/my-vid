import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { AuthorizationService } from "./authorization.service";

@Injectable({
    providedIn: "root"
})
export class AuthGuard implements CanActivate {
    constructor(private authorizationService: AuthorizationService, private router: Router) {}

    public canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.authorizationService.getIsAuthenticated().pipe(
            map((isAuth: boolean) => {
                if (!isAuth) {
                    this.router.navigate(["/login"]);
                }
                return isAuth;
            })
        );
    }
}
