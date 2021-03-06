import { Component } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-project';
  public isMenuOpen: boolean = false;
  public onSidenavClick(): void {
    this.isMenuOpen = false;
  }
}
