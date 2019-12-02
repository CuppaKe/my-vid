import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { Router, NavigationEnd } from "@angular/router";
import { switchMap, map, filter, distinctUntilChanged } from "rxjs/operators";

import { AuthorizationService } from "./core/authorization.service";
import { CoursesService } from "./core/courses.service";

/**
 * App component
 */
@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
    /**
     * Whether user is authorized
     */
    public isAuthorized$: Observable<boolean>;

    /**
     * User nickname
     */
    public user$: Observable<string>;

    /**
     * Breadcrumbs endlink
     */
    public breadCrumbsLink$: Observable<string>;

    constructor(
        private authService: AuthorizationService,
        private router: Router,
        private coursesService: CoursesService
    ) {}

    public ngOnInit(): void {
        this.isAuthorized$ = this.authService.getIsAuthenticated();
        this.user$ = this.authService.getUserInfo();
        this.getBreadLink();
    }

    /**
     * On logout
     */
    public onLogout(): void {
        this.authService.logout();
        this.router.navigate(["/login"]);
        console.log("log off user");
    }

    private getBreadLink(): void {
        this.breadCrumbsLink$ = this.router.events.pipe(
            filter((event) => event instanceof NavigationEnd),
            distinctUntilChanged(),
            switchMap((events: NavigationEnd) => {
                let id: number = events && +events.url.match(/\d+$/gm);
                return id ? this.coursesService.getCourseById(id).pipe(map((course) => course.title)) : of("");
            })
        );
    }
}
