import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatsComponent } from './stats/stats.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { PoppyComponent } from './poppy/poppy.component';

@NgModule({
  declarations: [
    AppComponent,
    StatsComponent,
    LeaderboardComponent,
    PoppyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    StatsComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule implements DoBootstrap {
  private readonly _injector: Injector;

  public constructor(injector: Injector) {
    this._injector = injector;
  }

  ngDoBootstrap(): void {
    const element = createCustomElement(StatsComponent, { injector: this._injector });
    customElements.define('serviceware-rewards', element);
  }

}
