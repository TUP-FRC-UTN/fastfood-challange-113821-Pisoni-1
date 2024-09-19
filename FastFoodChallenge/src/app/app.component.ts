import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { POSComponentComponent } from "./poscomponent/poscomponent.component";
import { KitchenComponentComponent } from "./kitchen-component/kitchen-component.component";
import { RestoComponentComponent } from "./resto-component/resto-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, POSComponentComponent, KitchenComponentComponent, RestoComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FastFoodChallenge';
}
