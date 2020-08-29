// Angular
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
// Modules
import { AppRoutingModule } from './app-routing.module'
import { SharedModule } from './modules/shared/shared.module'
// Components
import { NavbarComponent, HomebaseComponent } from './components'
import { AppComponent } from './app.component'
// Ngxs 
import { NgxsModule } from '@ngxs/store'
import { PeopleState } from './modules/people/state/people.state'
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin'
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin'

// import { environment } from 'src/environments/environment'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomebaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([
      PeopleState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA] // Gets rid of <center/> tag errors
})
export class AppModule { }
