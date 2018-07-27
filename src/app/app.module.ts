//#region Ng Imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
//#endregion
//#region Airport Imports
import { HomeComponent } from './home/home.component';

import { PlaneListComponent } from './Plane/plane-list/plane-list.component';
import { PlaneDetailsComponent } from './Plane/plane-details/plane-details.component';

import { PlaneTypeListComponent } from './PlaneType/plane-type-list/plane-type-list.component';
import { PlaneTypeDetailsComponent } from './PlaneType/plane-type-details/plane-type-details.component';

import { StewardessesListComponent } from './Stewardess/stewardesses-list/stewardesses-list.component';
import { StewardessDetailsComponent } from './Stewardess/stewardess-details/stewardess-details.component';
import { StewardessService } from './Stewardess/Service/stewardess.service';

import { PilotListComponent } from './Pilot/pilot-list/pilot-list.component';
import { PilotDetailsComponent } from './Pilot/pilot-details/pilot-details.component';
import { PilotService } from './Pilot/Service/pilot.service';

import { CrewListComponent } from './Crew/crew-list/crew-list.component';
import { CrewDetailsComponent } from './Crew/crew-details/crew-details.component';
import { CrewService } from './Crew/Service/crew.service';

import { TicketListComponent } from './Ticket/ticket-list/ticket-list.component';
import { TicketDetailsComponent } from './Ticket/ticket-details/ticket-details.component';
import { TicketService } from './Ticket/Service/ticket.service';

import { FlightListComponent } from './Flight/flight-list/flight-list.component';
import { FlightDetailsComponent } from './Flight/flight-details/flight-details.component';
import { FlightService } from './Flight/Service/flight.service';

import { DepartureListComponent } from './Departure/departure-list/departure-list.component';
import { DepartureDetailsComponent } from './Departure/departure-details/departure-details.component';
import { DepartureService } from './Departure/Service/departure.service';
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
    PilotDetailsComponent,
    CrewListComponent,
    CrewDetailsComponent,
    TicketListComponent,
    TicketDetailsComponent,
    FlightListComponent,
    FlightDetailsComponent,
    DepartureListComponent,
    DepartureDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule.forRoot()
  ],
  providers: [
    StewardessService,
    PilotService,
    CrewService,
    TicketService,
    FlightService,
    DepartureService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
