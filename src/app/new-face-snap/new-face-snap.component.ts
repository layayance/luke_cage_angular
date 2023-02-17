import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent {
  
  serieForm!: FormGroup;
  faceSnapPreview$!: Observable<FaceSnap>


  constructor(private formBuilder: FormBuilder){ }

    ngOnInit(): void {
      this.serieForm = this.formBuilder.group({
        title: [null],
        description: [null],
        imageUrl: [null],
        location: [null]
      });
      this.faceSnapPreview$ = this.serieForm.valueChanges.pipe(
        map(formValue => ({
            ...formValue,
            createdDate: new Date(),
            snaps: 0,
            id: 0
        }))
    );
    }
  
    onSubmitForm(): void {
      console.log(this.serieForm.value);
    }
}
