import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false ;

  //lastUpdate = new Date();
  lastUpdate = new Promise(
    (resolve, reject) =>{
      const date=new Date();
      setTimeout(
        ()=>{
          resolve(date);
        },2000
      );
    }
  )
  appareils = [
    {
      name : "Machine à laver",
      status : "éteint"
    }
    {
      name :"TV",
      status : "allumé"
    }
  ]
  constructor(){

    console.log("Appcomponent is created !");
    setTimeout(
      () => {
        this.isAuth = true ;
      },4000
    );
  }

  onAllumer(){
    console.log("on allume tt");
  }
}
