import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ElementsOverviewComponent} from './elements-overview/elements-overview.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ElementsOverviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'retrospective-builder';
}
