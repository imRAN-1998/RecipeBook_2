import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  constructor(private route1 : ActivatedRoute,
    private recipesService : RecipesService,
    private router1 :Router) { }
  recipe: Recipe;
  recipes : Recipe[];
  subscription1 : Subscription;
  ngOnInit(): void {
    this.route1.params.subscribe(data=>{
      const id = +data['id'];
      // this.subscription1= this.recipesService.fetchData().subscribe(data=>{
      //   this.recipes=data;
      //   this.recipe=this.recipes[id];
      //   // console.log(this.recipes);
      // })
      this.recipe=this.recipesService.getRecipe(id);
    })
  }
  nav(){
    this.router1.navigate(['../../'],{relativeTo:this.route1});
  }

}
