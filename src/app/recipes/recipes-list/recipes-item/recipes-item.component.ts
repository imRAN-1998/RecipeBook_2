import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input('recipe') recipe: Recipe;
  constructor(private route1 : ActivatedRoute,
    private router1 : Router) { }

  ngOnInit(): void {
    
  }
  nav(){
    this.router1.navigate([this.recipe.id,'detail'],{relativeTo:this.route1});
  }

}
