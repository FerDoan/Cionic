import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  onClick = () => {
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      backdropDismiss:false,
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: [
        {
          text:'Okay' ,
          handler:(data: any) =>{
            // console.log('ok');
            console.log(data);
          }
        },
        {
          text:'Cancelar' ,
          role: 'cancel',
          cssClass: 'rojo',
          handler:() =>{
            console.log('cancel');
          }
        }
      ],
      inputs:[
        {name:"nombre",type:"text",placeholder:"Nomnbre"},
        {name:"apellido",type:"text",placeholder:"Apellido"},
        {name:"fecha",type:"date",min:'2012-22-05',max:'2025-05-22'}
      ]
    });

    await alert.present();
  }

}
