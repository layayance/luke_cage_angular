import { NgIf } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  @Input()faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService, private router: Router){

  }

  ngOnInit() {
    this.buttonText = 'Plus, 1 !';
  }
  onSnap() {
    if (this.buttonText === 'Plus, 1 !') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Moins,-1 !';
    } else{
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Plus, 1 !';
    }

  }
  
 onViewFaceSnap(){
  this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
}

}

function onViewFaceSnap(): void {
  throw new Error('Function not implemented.');
}
