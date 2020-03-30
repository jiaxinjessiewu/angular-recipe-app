import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedPage = 'recipes';
  onNavigation(page: string) {
    console.log("app on navi: ",page)
    this.loadedPage = page;
  }
}
