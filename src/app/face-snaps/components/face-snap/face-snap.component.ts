import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { FaceSnap } from '../../../core/models/face-snap.model'; 
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  //@Input()faceSnap! : Observable<FaceSnap>;
  @Input()faceSnap! :FaceSnap;
  buttonText!: string;

constructor (private FaceSnapsService: FaceSnapsService, private route: ActivatedRoute, private router: Router){}

  ngOnInit() {
    this.buttonText = 'Plus, 1 !';
    const faceSnapId = +this.route.snapshot.params['id']; 
   // this.faceSnap = this.FaceSnapsService.getFaceSnapById(faceSnapId);
  }
  onSnap() {
    if (this.buttonText === 'Plus, 1 !') {
      this.FaceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Moins,-1 !';
    } else{
      this.FaceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Plus, 1 !';
    }

  }
  onVisualiserFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  } 
}

