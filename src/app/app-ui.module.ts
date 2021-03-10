import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
const uiModules = [
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatCarouselModule,
  MatDividerModule,
  MatListModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
  MatIconModule,
  MatButtonModule
  ],
  exports: uiModules

})
export class AppUiModule { }
