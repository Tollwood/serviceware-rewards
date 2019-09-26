import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MatDialogModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { PoppyComponent } from './poppy/poppy.component';
import { StatsComponent } from './stats/stats.component';
import { SparkleComponent } from './stats/sparkle/sparkle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [ AppComponent, StatsComponent, LeaderboardComponent, PoppyComponent, SparkleComponent ],
	imports: [ BrowserModule, AppRoutingModule, HttpClientModule, MatDialogModule, BrowserAnimationsModule ],
	bootstrap: [],
	providers: [ { provide: APP_BASE_HREF, useValue: '/' } ],
	entryComponents: [ StatsComponent, PoppyComponent, LeaderboardComponent ]
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
