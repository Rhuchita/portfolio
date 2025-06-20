import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
// if (environment.production) {
//   enableProdMode();
// }
// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch(err => console.error(err));