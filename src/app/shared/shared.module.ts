import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { LogoComponent } from "./logo/logo.component";

@NgModule({
    declarations: [HeaderComponent, FooterComponent, LogoComponent],
    imports: [CommonModule, MatIconModule, MatButtonModule],
    exports: [HeaderComponent, FooterComponent]
})
export class SharedModule {}
