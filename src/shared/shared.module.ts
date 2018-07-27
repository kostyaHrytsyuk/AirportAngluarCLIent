import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaneTypeService } from './PlaneType/plane-type.service';
import { PlaneService } from './Plane/plane.service';
import { StewardessService } from './Stewardess/stewardess.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class SharedModule { 
  public static forRoot(): ModuleWithProviders
  {
    return {
      ngModule: SharedModule,
      providers: [ 
        PlaneTypeService,
        PlaneService,
        StewardessService
      ]
    }
  }
}
