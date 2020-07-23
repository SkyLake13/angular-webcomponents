import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [AppComponent],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  public ngDoBootstrap(): void {
      const externalTileCE = createCustomElement(AppComponent, { injector: this.injector });
      customElements.define('web-comp-1', externalTileCE);
  }
 }
