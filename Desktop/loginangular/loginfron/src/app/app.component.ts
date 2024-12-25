import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Import RouterModule
import { appRoutes } from './app.routes';         // Import your routes configuration

@Component({
  selector: 'app-root',
  standalone: true,                           // Ensure this component is standalone
  imports: [RouterModule],                    // Include RouterModule for routing
  template: `<router-outlet></router-outlet>` // This is where the routed components will appear
})
export class AppComponent {}
