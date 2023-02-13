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
  const tempArray = this.faceSnapsServices.getAllFaceSnaps();
  tempArray.push({
    id: 4,
    title:'fdfd',
    description:  'dfdf officière qui éssai de rétablir l\'odre à Harlem',
    imageUrl: 'https://zupimages.net/up/18/14/63sf.jpg',
    createdDate: new Date(),
    snaps: 99,
    location: 'dfdfDitrict 29éme'
  })

  
}
}


