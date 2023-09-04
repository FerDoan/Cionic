import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.page.html',
  styleUrls: ['./boton.page.scss'],
})
export class BotonPage implements OnInit {

  constructor() { }

  favorite: boolean = false;
  ngOnInit() {
  }

  onClick(){  
    this.favorite = !this.favorite
  }
}
