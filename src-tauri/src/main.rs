// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::Manager;
use windows::{core::HSTRING, Win32::System::WinRT::EventRegistrationToken};
use webview2_com::{Microsoft::Web::WebView2::Win32::*, *};
use windows::core::PCWSTR;

#[tauri::command]
fn close_window(app: tauri::AppHandle, label: &str) {
  if
    let Some(w_label) = app
      .windows()
      .into_keys()
      .find(|wd| wd == label)
  {
    println!("I was invoked from JS to close the label: {}", w_label);
    let window_old = app.get_window(&w_label).unwrap();
    window_old.close().unwrap();
  }
}

fn main() {
  tauri::Builder
    ::default()
    .invoke_handler(tauri::generate_handler![close_window])
    .setup(|app| {
      let window = app.get_window("main").unwrap();
      let _ = &window.with_webview(|webview| unsafe {
        let core: ICoreWebView2 = webview.controller().CoreWebView2().unwrap();

        // note: set the filter to tauri.app*
        let _filter = core.AddWebResourceRequestedFilter(
          PCWSTR(HSTRING::from("*://tauri.app*").as_ptr()),
          COREWEBVIEW2_WEB_RESOURCE_CONTEXT_DOCUMENT
        );

        let mut token = EventRegistrationToken::default();

        let __ = core.add_WebResourceRequested(
          &WebResourceRequestedEventHandler::create(
            Box::new(move |_webview, args| {
              
              if let Some(_args) = args {

                // todo: why it get trigger from tauri.localhost as well? 
                println!("add_WebResourceRequested");
              }
             
              Ok(())
            })
          ),
          &mut token
        );
      });

      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
