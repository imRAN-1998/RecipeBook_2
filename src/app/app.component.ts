import { Component, ViewChild, ElementRef, OnInit, OnDestroy, AfterViewInit, AfterViewChecked } from '@angular/core';
import { RecipesService } from './recipes/recipes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  @ViewChild('size1',{static:true}) s : ElementRef;
  // @ViewChild() loader : 
  loading=null;
  subscription1 : Subscription;
  constructor(private recipesService1 : RecipesService,
     ){}
  funcLeave(){
    this.s.nativeElement.style.backgroundSize="100% 100%";
      // this.s.nativeElement.style.transition="1s";
  }
  funcEnter(){
    this.s.nativeElement.style.backgroundSize="150% 150%";
      // this.s.nativeElement.style.transition="1s";
  }
  ngOnInit(){
   
    this.s.nativeElement.style.transition="1s";
    this.recipesService1.getRecipes();
    this.subscription1=this.recipesService1.loading.subscribe(data=>{
      this.loading=data;
    })
  }
  title = 'temp-project-one';
  ngOnDestroy(){
    this.subscription1.unsubscribe();
    localStorage.removeItem('recipesForSearch');
    
  }
  
}
