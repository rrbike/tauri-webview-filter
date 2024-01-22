import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { components } from './component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [...components, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
