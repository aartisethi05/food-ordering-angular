import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ItemListComponent } from './item-list/item-list.component';
import { BillComponent } from './bill/bill.component';
import { TopbarComponent } from './topbar/topbar.component';

import { AppUiModule } from '../../../app-ui.module';
@NgModule({
  declarations: [HomeComponent, ItemListComponent, BillComponent, TopbarComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppUiModule
  ]
})
export class HomeModule { }
