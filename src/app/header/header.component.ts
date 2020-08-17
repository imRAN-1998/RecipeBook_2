import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router1 : Router,
    private route1 : ActivatedRoute) { }

  ngOnInit(): void {
  }
  nav(){
    this.router1.navigate(['/search']);
  }

}
