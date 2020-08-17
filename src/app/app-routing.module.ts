import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { SearchComponent } from './search/search.component';
import { LoadingResolverService } from './loading-resolver.service';

const routes: Routes = [
  {path : ':id/detail' , component: RecipesDetailComponent,resolve:[LoadingResolverService]},
  {path : 'search/:id/detail' , component: RecipesDetailComponent,resolve:[LoadingResolverService]},
  {path:'search',component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
