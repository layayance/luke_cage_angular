import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject, takeUntil, tap } from 'rxjs';
import { FaceSnap } from '../core/models/face-snap.model';
import { FaceSnapsService } from '../core/services/face-snaps.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit, OnDestroy {

  //faceSnaps!:FaceSnap[];
  faceSnaps$!: Observable<FaceSnap[]>;
  private destroy$!: Subject<boolean>;

  constructor(private faceSnapsServices: FaceSnapsService){  }

ngOnInit(): void {
  this.destroy$! = new Subject<boolean>();
 // this.faceSnaps = this.faceSnapsServices.getAllFaceSnaps();
 this.faceSnaps$ = this.faceSnapsServices.getAllFaceSnaps();
  

  interval(1000).pipe(
    takeUntil(this.destroy$),
    tap(console.log),
).subscribe();
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
ngOnDestroy(){
  this.destroy$!.next(true)
}
}
