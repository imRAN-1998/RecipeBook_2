import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Recipe } from './recipe.model';
import { tap } from 'rxjs/operators'
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable()
export class RecipesService{
    constructor(private http1 : HttpClient){}
    recipes : Recipe[]=[];
    loading = new BehaviorSubject<string>(null);
    fetchData(){
        this.loading.next('start');
        const url="http://starlord.hackerearth.com/recipe";
        return this.http1.get<Recipe[]>(url).pipe(tap(data=>{
            // console.log(data);
            this.loading.next(null);
            this.recipes=data;
            localStorage.removeItem('recipesForSearch');
            localStorage.setItem('recipesForSearch',JSON.stringify(this.recipes));
        }))
    }
    getRecipes(){
       return this.recipes;
    }
    getRecipe(id: number){
        return this.recipes[id];
    }
}