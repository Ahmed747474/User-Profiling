import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
years  = new Date().getFullYear() ;
  constructor() { }

  ngOnInit() {
     console.log( 
     )
    
  }

}
