import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!:FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap! : FaceSnap; 

  ngOnInit(){
    this.mySnap = {
      title: 'Luke Cage',
      description:  'Il rentablir lordre à Harlem !',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtQUBTV1e1Ry9QtXT-tztl71i8NgeGO1VL4w&usqp=CAU',
      createdDate:   new Date(),
      snaps:  0,
      location: 'New York'
      };

    this.myOtherSnap = {
      title:'Cornell Cottonmouh',
      description:  'Le méchant d Harlem',
      imageUrl: 'https://imgsrc.cineserie.com/2020/07/luke-cage-la-verite-sur-la-mort-du-personnage-de-mahershala-ali.jpg?ver=1',
      createdDate: new Date(),
      snaps: 1,
      location: 'Harlem'
    };

    this.myLastSnap = {
      title:'Misty',
      description:  'Une officière qui éssai de rétablir l odre à Harlem',
      imageUrl: 'https://zupimages.net/up/18/14/63sf.jpg',
      createdDate: new Date(),
      snaps: 3,
      location: 'Ditrict 29éme'
    };

  }
}
                                                                                                                                                      