import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MainComponent } from './main.component'
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [
    MainComponent,
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
