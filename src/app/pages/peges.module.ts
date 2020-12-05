import { NgModule } from "@angular/core";


//module
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PegesComponent } from './peges.component';
import { PEGES_ROUTES } from './peges.routes';
import { ProgressComponent } from './progress/progress.component';


@NgModule ({
    declarations:[
      PegesComponent,
      DashboardComponent,
      ProgressComponent,
      Graficas1Component
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports:[
        SharedModule,
        PEGES_ROUTES
    ]
})

export class PegesModule{}