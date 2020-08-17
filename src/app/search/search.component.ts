import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipes/recipe.model';
import { Subscription } from 'rxjs';
import { RecipesService } from '../recipes/recipes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  subscription1: Subscription;

  constructor(private router1 : Router,
    private route1 : ActivatedRoute,
    private recipesService1 : RecipesService) { }
    recipes : Recipe[];
    newRecipes : Recipe[]=[];
  ngOnInit(): void {
    if(localStorage.length>=1){
      // console.log(JSON.parse(localStorage.getItem('recipesForSearch')));
      this.recipes=JSON.parse(localStorage.getItem('recipesForSearch'));
      // console.log(this.recipes);
    }
    
  }
  onclick(){
    this.router1.navigate(['../'],{relativeTo:this.route1});
  }
  func1(search){
    // console.log(search.value);
    this.newRecipes=[];
    this.recipes.forEach(recipe=>{
      const name=recipe.name.toLowerCase();
      if(name.indexOf(search.value.toLowerCase()) != -1 && search.value != ''){
        this.newRecipes.push(recipe);
      }
    })
    console.log(this.newRecipes);
  }

}
