import { InjectionToken } from "@angular/core";

export const IS_TAURI_TOKEN = new InjectionToken<boolean>('Is Tauri', {
    providedIn: 'root',
    factory: (): boolean => !!(window as unknown as { ['__TAURI__']?: any })?.__TAURI__
  });
  