import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  faceSnaps!:FaceSnap[];

  constructor(private faceSnapsServices: FaceSnapsService){  }

ngOnInit(): void {
  this.faceSnaps = this.faceSnapsServices.getAllFaceSnaps();
  // const tempArray = this.faceSnapsServices.getAllFaceSnaps();
  // tempArray.push({
//     id: 4,
//     title:'Shade',
//     description:'Le bras droit de Collonmouth',
//     imageUrl: 'https://www.google.fr/url?sa=i&url=https%3A%2F%2Fscreencrush.com%2Fluke-cage-season-2-shades-theo-rossi%2F&psig=AOvVaw1b-y-mRZ2lYDqZXqQ9v4ED&ust=1676390183210000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCJCIy7Pukv0CFQAAAAAdAAAAABAD',
//     createdDate: new Date(),
//     snaps: 89,
//     location: 'Harlem'
// })


  
}
}


