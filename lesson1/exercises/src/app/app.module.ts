import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ChoresListComponent } from './chores-list/chores-list.component';
import { FavPhotosComponent } from './fav-photos/fav-photos.component';
import { HeaderComponent } from './header/header.component';
import { CrewComponent } from './crew/crew.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { ExperimentComponent } from './experiment/experiment.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ChoresListComponent,
    FavPhotosComponent,
    HeaderComponent,
    CrewComponent,
    EquipmentComponent,
    ExperimentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
