import { NgIf } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  @Input()faceSnap!: FaceSnap;
  buttonText!: string;

  ngOnInit() {
    this.buttonText = 'Plus, 1 !';
  }
  onSnap() {
    if (this.buttonText === 'Plus, 1 !') {
      this.faceSnap.snaps++;
      this.buttonText = 'Moins,-1 !';
    } else{
      this.faceSnap.snaps--;
      this.buttonText = 'Plus, 1 !';
    }

  }
  
}

