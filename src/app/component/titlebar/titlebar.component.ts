import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrandComponent } from '../brand/brand.component';
import { IS_TAURI_TOKEN } from '../../service';

@Component({
  selector: 'app-titlebar',
  standalone: true,
  imports: [BrandComponent, RouterLink],
  templateUrl: './titlebar.component.html',
  styleUrl: './titlebar.component.css',
})
export class TitlebarComponent {
  private _isTauri = inject(IS_TAURI_TOKEN);

  closeWindow = async (): Promise<void> => {
    if (this._isTauri) {
      const { window, invoke } = await import('@tauri-apps/api');
      invoke('close_window', { label: window.appWindow.label });
    }
  };
}
