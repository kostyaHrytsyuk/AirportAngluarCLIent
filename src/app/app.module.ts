import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Route } from '../../node_modules/@angular/compiler/src/core';
import { componentRefresh } from '../../node_modules/@angular/core/src/render3/instructions';
import { PlaneTypeListComponent } from './PlaneType/plane-type-list/plane-type-list.component';
import { PlaneTypeDetailsComponent } from './PlaneType/plane-type-details/plane-type-details.component';
import { PlaneTypeService } from './PlaneType/Service/plane-type.service';
import { HomeComponent } from './home/home.component';
import { StewardessesListComponent } from './Stewardess/stewardesses-list/stewardesses-list.component';
import { StewardessService } from './Stewardess/StewardessService/stewardess.service';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as _ from 'lodash';

// const appRoutes: Routes = [
//  { path: '/home', component: HomeComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    PlaneTypeListComponent,
    PlaneTypeDetailsComponent,
    HomeComponent,
    StewardessesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PlaneTypeService,
    StewardessService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
