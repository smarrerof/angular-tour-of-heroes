import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { HeroService } from './hero.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }      from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroSearchComponent }  from './hero-search.component';

import { AppRoutingModule }     from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
