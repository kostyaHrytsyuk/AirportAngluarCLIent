//#region Ng Imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
//#endregion
//#region Airport Imports
import { HomeComponent } from './home/home.component';

import { PlaneListComponent } from './Plane/plane-list/plane-list.component';
import { PlaneDetailsComponent } from './Plane/plane-details/plane-details.component';
import { PlaneService } from './Plane/Service/plane.service';

import { PlaneTypeListComponent } from './PlaneType/plane-type-list/plane-type-list.component';
import { PlaneTypeDetailsComponent } from './PlaneType/plane-type-details/plane-type-details.component';
import { PlaneTypeService } from './PlaneType/Service/plane-type.service';

import { StewardessesListComponent } from './Stewardess/stewardesses-list/stewardesses-list.component';
import { StewardessDetailsComponent } from './Stewardess/stewardess-details/stewardess-details.component';
import { StewardessService } from './Stewardess/Service/stewardess.service';

import { PilotListComponent } from './Pilot/pilot-list/pilot-list.component';
import { PilotDetailsComponent } from './Pilot/pilot-details/pilot-details.component';
import { PilotService } from './Pilot/Service/pilot.service';
//#endregion

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlaneTypeListComponent,
    PlaneTypeDetailsComponent,
    StewardessesListComponent,
    StewardessDetailsComponent,
    PlaneListComponent,
    PlaneDetailsComponent,
    PilotListComponent,
    PilotDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PlaneTypeService,
    StewardessService,
    PlaneService,
    PilotService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
