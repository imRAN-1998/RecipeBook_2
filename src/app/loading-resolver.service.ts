
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Recipe } from './recipes/recipe.model';
import { Injectable } from '@angular/core';
import { RecipesService } from './recipes/recipes.service';
@Injectable({
    providedIn:'root'
})
export class LoadingResolverService implements Resolve<Recipe[]>{
    constructor(private recipesService1 : RecipesService ){}
    resolve(route1: ActivatedRouteSnapshot,
        state1 :  RouterStateSnapshot){
            const new1=this.recipesService1.getRecipes();
            console.log(new1);
            // console.log(new1);
            if(new1.length==0){
                console.log('yes');
                return this.recipesService1.fetchData();
            }
    }
}