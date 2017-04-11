import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavModule } from './nav/nav.module';

@NgModule({
  imports: [
    CommonModule,
    NavModule
  ],
  exports: [NavModule],
  declarations: []
})
export class CoreModule { }
