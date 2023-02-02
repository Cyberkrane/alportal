import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

titulo1 ='gallery'; 
titulo2 ='mockups'; 
titulo3 ='reels'; 
titulo4 ='my profile';   

  constructor() { }

  ngOnInit(): void {
  }

}
