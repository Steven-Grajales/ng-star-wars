// Angular
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
// Modules
import { AppRoutingModule } from './app-routing.module'
import { SharedModule } from './shared/shared.module'
import { PeopleModule } from './components/people/people.module'
import { StarshipsModule } from './components/starships/starships.module'
// Components
import { NavbarComponent, HomebaseComponent } from './components'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomebaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    PeopleModule,
    StarshipsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA] // Gets rid of <center/> tag errors
})
export class AppModule { }
