import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrandComponent } from '../brand/brand.component';

@Component({
  selector: 'app-titlebar',
  standalone: true,
  imports: [BrandComponent, RouterLink],
  templateUrl: './titlebar.component.html',
  styleUrl: './titlebar.component.css'
})
export class TitlebarComponent {

}
