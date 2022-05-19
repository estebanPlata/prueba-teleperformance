import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MainComponent } from './main.component'
import { MaterialModule } from 'src/app/material.module';
import { FilterPipe } from 'src/app/share/pipes/filter.pipe';



@NgModule({
  declarations: [
    MainComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [

  ]
})
export class MainModule { }
