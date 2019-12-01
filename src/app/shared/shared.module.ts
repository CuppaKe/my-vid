import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { LogoComponent } from "./logo/logo.component";
import { CreationDateDirective } from "./directives/creation-date.directive";
import { DurationFormatPipe } from "./pipes/duration-format.pipe";
import { OrderByPipe } from "./pipes/order-by.pipe";
import { ComponentNotFoundComponent } from "./component-not-found/component-not-found.component";

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        LogoComponent,
        CreationDateDirective,
        DurationFormatPipe,
        OrderByPipe,
        ComponentNotFoundComponent
    ],
    imports: [CommonModule, MatIconModule, MatButtonModule, RouterModule],
    exports: [HeaderComponent, FooterComponent, CreationDateDirective, DurationFormatPipe, OrderByPipe]
})
export class SharedModule {}
