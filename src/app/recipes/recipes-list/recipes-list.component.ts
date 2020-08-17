import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit,OnDestroy{

  constructor(private recipesService : RecipesService) { }
  recipes : Recipe[]=[];
  subscription1 : Subscription;
  ngOnInit(): void {
    this.subscription1=this.recipesService.fetchData().subscribe(data=>{
      this.recipes=data;
    });
  }
  ngOnDestroy(){
    this.subscription1.unsubscribe();
  }

}
