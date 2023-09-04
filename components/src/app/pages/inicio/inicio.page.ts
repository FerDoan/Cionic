import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string,
  name: string,
  redirectTo: string
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  items: Componente[] = [  
      {
        icon : 'american-football',
        name: "action-sheet",
        redirectTo:"/action-sheet"
      },
      {
        icon : 'alert-circle-outline',
        name: "alert",
        redirectTo:"/alert"
      },
      {
        icon : 'person-circle-outline',
        name: "avatar",
        redirectTo:"/avatar"
      },
      {
        icon : 'radio-button-on-outline',
        name: "Boton",
        redirectTo:"/boton"
      },
      {
        icon : 'card-outline',
        name: "Cards",
        redirectTo:"/card"
      },
      {
        icon : 'checkbox-outline',
        name: "Check Box",
        redirectTo:"/checkbox"
      },
      {
        icon : 'calendar-outline',
        name: "DateTime",
        redirectTo:"/datetime"
      },
      {
        icon : 'car-outline',
        name: "Fab",
        redirectTo:"/fap"
      },
    ]
  constructor() { }

  ngOnInit() {
    console.log(this.items)
  }

}
