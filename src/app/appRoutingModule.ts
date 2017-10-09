import { MoreDetailsComponent } from './more-details/more-details.component';
import { DisplayResultsComponent } from './display-results/display-results.component';
import { DispaycontainerComponent } from './dispaycontainer/dispaycontainer.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { SearchComponent } from './search/search.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
 
const routes: Routes = [
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
  

  
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


