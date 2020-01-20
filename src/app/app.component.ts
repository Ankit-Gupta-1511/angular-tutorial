import { Component } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';
  isAuthPage = false;
  routeData;
  
  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.routeData = data.state.root.firstChild.data;
        this.isAuthPage = this.routeData.authPage;
      }
    });
  }
}
