import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { AllCharactersComponent } from './all-characters/all-characters.component';
import { ListItemLinkComponent } from './list-item-link/list-item-link.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterDetailsComponent,
    AllCharactersComponent,
    ListItemLinkComponent,
    SearchComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,NgxPaginationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
