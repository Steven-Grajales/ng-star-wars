import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { PeopleComponent } from './people/people.component'
import { SharedModule } from './shared/shared.module';
import { StarshipsComponent } from './starships/starships.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomebaseComponent } from './homebase/homebase.component'

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    StarshipsComponent,
    NavbarComponent,
    HomebaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA] // Gets rid of <center/> tag errors
})
export class AppModule { }
