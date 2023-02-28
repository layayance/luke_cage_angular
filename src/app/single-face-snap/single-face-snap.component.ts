import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap$! : Observable<FaceSnap>;
  buttonText! : string;

  constructor(private faceSnapsService: FaceSnapsService, private route: ActivatedRoute){

  }

  ngOnInit() {
    this.buttonText = 'Plus, 1 !';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }
  onSnap(faceSnapId: number) {
    if (this.buttonText === 'Plus, 1 !') {
      this.faceSnap$ =   this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
        tap(() =>  this.buttonText = 'Moins,-1 !'
       )
      );
    
    } else {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
        tap(() => this.buttonText = 'Plus, 1 !')
      );
    }
     
    }

  }


