import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaneTypeDetailsComponent } from './PlaneType/plane-type-details/plane-type-details.component'
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo: '/home'
    },{
        path: 'home',
        component: HomeComponent
    },{
        path: 'details',
        component: PlaneTypeDetailsComponent
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