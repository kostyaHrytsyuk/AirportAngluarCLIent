import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { PlaneTypeListComponent } from './PlaneType/plane-type-list/plane-type-list.component';
import { PlaneTypeDetailsComponent } from './PlaneType/plane-type-details/plane-type-details.component'
import { StewardessesListComponent } from './Stewardess/stewardesses-list/stewardesses-list.component';
import { StewardessDetailsComponent } from './Stewardess/stewardess-details/stewardess-details.component';
import { PlaneListComponent } from './Plane/plane-list/plane-list.component';
import { PlaneDetailsComponent } from './Plane/plane-details/plane-details.component';
import { PilotListComponent } from './Pilot/pilot-list/pilot-list.component';
import { PilotDetailsComponent } from './Pilot/pilot-details/pilot-details.component';
import { CrewListComponent } from './Crew/crew-list/crew-list.component';
import { CrewDetailsComponent } from './Crew/crew-details/crew-details.component';
import { TicketListComponent } from './Ticket/ticket-list/ticket-list.component';
import { TicketDetailsComponent } from './Ticket/ticket-details/ticket-details.component';
import { FlightListComponent } from './Flight/flight-list/flight-list.component';
import { FlightDetailsComponent } from './Flight/flight-details/flight-details.component';

const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo: '/home'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'planeTypes',
        component: PlaneTypeListComponent
    },
    {
        path: 'planeTypes/:id',
        component: PlaneTypeDetailsComponent
    },
    {
        path: 'planeTypes/:add',
        component: PlaneTypeDetailsComponent
    },
    {
        path: 'stewardesses',
        component: StewardessesListComponent
    },
    {
        path: 'stewardesses/:id',
        component: StewardessDetailsComponent
    },
    {
        path: 'stewardesses/add',
        component: StewardessDetailsComponent
    },
    {
        path: 'planes',
        component: PlaneListComponent    
    },
    {
        path: 'planes/:id',
        component: PlaneDetailsComponent
    },
    {
        path: 'planes/add',
        component: PlaneDetailsComponent
    },
    {
        path: 'pilots',
        component: PilotListComponent    
    },
    {
        path: 'pilots/:id',
        component: PilotDetailsComponent
    },
    {
        path: 'pilots/add',
        component: PilotDetailsComponent
    },
    {
        path: 'crews',
        component: CrewListComponent    
    },
    {
        path: 'crews/:id',
        component: CrewDetailsComponent
    },
    {
        path: 'crews/add',
        component: CrewDetailsComponent
    },
    {
        path: 'tickets',
        component: TicketListComponent    
    },
    {
        path: 'tickets/:id',
        component: TicketDetailsComponent
    },
    {
        path: 'tickets/add',
        component: TicketDetailsComponent
    },
    {
        path: 'flights',
        component: FlightListComponent    
    },
    {
        path: 'flights/:id',
        component: FlightDetailsComponent
    },
    {
        path: 'flights/add',
        component: FlightDetailsComponent
    }
];

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{

}