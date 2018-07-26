import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { PlaneTypeDetailsComponent } from './PlaneType/plane-type-details/plane-type-details.component'
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { PlaneTypeListComponent } from './PlaneType/plane-type-list/plane-type-list.component';
import { StewardessesListComponent } from './Stewardess/stewardesses-list/stewardesses-list.component';
import { StewardessDetailsComponent } from './Stewardess/stewardess-details/stewardess-details.component';

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