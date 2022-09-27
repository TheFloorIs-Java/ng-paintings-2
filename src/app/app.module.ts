import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllPaintingsComponent } from './pages/all-paintings/all-paintings.component';
import { AddPaintingComponent } from './pages/add-painting/add-painting.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PaintingCardComponent } from './components/painting-card/painting-card.component';
import { AddMenuComponent } from './components/add-menu/add-menu.component';
import { PaintingListComponent } from './components/painting-list/painting-list.component';
import { FavoriteButtonComponent } from './components/favorite-button/favorite-button.component';
import { DropDownFavoritesComponent } from './components/drop-down-favorites/drop-down-favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    AllPaintingsComponent,
    AddPaintingComponent,
    NavbarComponent,
    PaintingCardComponent,
    AddMenuComponent,
    PaintingListComponent,
    FavoriteButtonComponent,
    DropDownFavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
