import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyChildComponent } from './my-child/my-child.component';
import { MyChildOneComponent } from './my-child-one/my-child-one.component';
import { MyHighlightDirective } from './my-highlight.directive';
import { DelayDirective } from './delay.directive';

@NgModule({
    declarations: [
        AppComponent,
        MyNavComponent,
        MyChildComponent,
        MyChildOneComponent,
        MyHighlightDirective,
        DelayDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        FormsModule
    ],
    providers: [
        Location,
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    bootstrap: [AppComponent],
    entryComponents: [MyChildComponent],
})
export class AppModule {
}
