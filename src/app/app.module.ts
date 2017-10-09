
import { SharedFavouriteService } from './shared-favourite.service';
import { HttpModule } from '@angular/http';
import { SearchSuggestionService } from './search-suggestion.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { DisplayResultsComponent } from './display-results/display-results.component';
import { RouterModule }   from '@angular/router';
import { DispaycontainerComponent } from './dispaycontainer/dispaycontainer.component';
import { MoreDetailsComponent } from './more-details/more-details.component';
import { FavouritesComponent } from './favourites/favourites.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    SearchComponent,
    DisplayResultsComponent,
    DispaycontainerComponent,
    MoreDetailsComponent,
    FavouritesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '',
      component: DispaycontainerComponent 
  },
      {path: 'results/:id/moredetails',
      component: MoreDetailsComponent },
      {path: 'results/:id/moredetails/:id',
      component: MoreDetailsComponent },
      {path: 'moredetails',
      component: MoreDetailsComponent },
      {path: 'moredetails/:id',
      component: MoreDetailsComponent },
      {path: 'results',
      component: DisplayResultsComponent },
      {path: 'results/:id',
      component: DisplayResultsComponent },
      {path: 'favourites',
      component: FavouritesComponent }
      

      
    ])
  ],
  providers: [SearchSuggestionService,SharedFavouriteService] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
