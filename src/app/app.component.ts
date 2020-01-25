import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { Router, NavigationEnd } from "@angular/router";
import { switchMap, map, filter, distinctUntilChanged } from "rxjs/operators";
import { TranslateService } from "@ngx-translate/core";

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
        private coursesService: CoursesService,
        private translate: TranslateService
    ) {}

    public ngOnInit(): void {
        this.isAuthorized$ = this.authService.isAuthenticated$;
        this.user$ = this.authService.userFullName$;
        this.getBreadLink();
        this.translate.setDefaultLang("en");
    }

    /**
     * On logout
     */
    public onLogout(): void {
        this.authService.logout();
        this.router.navigate(["/login"]);
    }

    /**
     * Change language
     * @param language - string - chosen language
     */
    public onSelect(language: string): void {
        this.translate.use(language);
    }

    private getBreadLink(): void {
        this.breadCrumbsLink$ = this.router.events.pipe(
            filter((event) => event instanceof NavigationEnd),
            distinctUntilChanged(),
            switchMap((events: NavigationEnd) => {
                let id: number = events && +events.url.match(/\d+$/gm);
                return id ? this.coursesService.editData$.pipe(map((course) => course.title)) : of("");
            })
        );
    }
}
