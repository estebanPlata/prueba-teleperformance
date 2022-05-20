import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MainComponent } from './main.component'
import { MaterialModule } from 'src/app/material.module';
import { FilterPipe } from 'src/app/share/pipes/filter.pipe';
import { ChartsComponent } from '../charts/charts.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [
    MainComponent,
    FilterPipe,
    ChartsComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    NgxChartsModule
  ],
  providers: [

  ]
})
export class MainModule { }
