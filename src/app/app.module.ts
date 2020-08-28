import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
// Modules
import { AppRoutingModule } from './app-routing.module'
import { SharedModule } from './shared/shared.module'
// Components
import {
  NavbarComponent,
  PeopleComponent,
  StarshipsComponent,
  HomebaseComponent
} from './components'

import { AppComponent } from './app.component';
import { PersonDetailComponent } from './components/people/person-detail/person-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    StarshipsComponent,
    NavbarComponent,
    HomebaseComponent,
    PersonDetailComponent
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
