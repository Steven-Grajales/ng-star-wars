// Angular
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
// Modules
import { AppRoutingModule } from './app-routing.module'
import { SharedModule } from './modules/shared'
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
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA] // Gets rid of <center/> tag errors
})
export class AppModule { }
