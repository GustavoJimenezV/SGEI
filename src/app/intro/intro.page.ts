import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Storage} from '@ionic/storage-angular';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
slideOpt = {
        initialSlide: 0,
        slidesPerView: 1,
        centeredSlides: true,
        speed: 400
};
slides = [
    {
    ImgSrc: "assets/img/LogoUpvt.png",
    ImgAlt: "Upvt SGEI Logo",
    Title: "Sube tus tareas",
    SubTitle: "DESDE CUALQUIER DISPOSITIVO",
    Description: "Accede y sube tus tareas en cualquier momento, a todas horas.",
    Icon:"document-outline",
},
    {
    ImgSrc: "assets/img/LogoUpvt.png",
    ImgAlt: "Upvt SGEI Logo",
    Title: "Modifica Tu Cuenta",
    SubTitle: "DESDE CUALQUIER DISPOSITIVO",
    Description: "Realiza modificaciones en tu cuenta.",
    Icon:"accessibility-outline",
},
    {
    ImgSrc: "assets/img/LogoUpvt.png",
    ImgAlt: "Upvt SGEI Logo",
    Title: "Verifica Tus Videoconferencias",
    SubTitle: "DESDE CUALQUIER DISPOSITIVO",
    Description: "Ver fechas de Videoconferencias.",
    Icon:"videocam-outline",
    }]

  constructor(private router: Router, private storage: Storage) { }
finish(){
    this.storage.set('isIntroShowed', true);
    this.router.navigateByUrl("/home");
  }
  ngOnInit() {
  }

}
