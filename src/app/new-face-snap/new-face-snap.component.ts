import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent {
  
  serieForm!: FormGroup;


  constructor(private formBuilder: FormBuilder){ }

    ngOnInit(): void {
      this.serieForm = this.formBuilder.group({
        title: [null],
        description: [null],
        imageUrl: [null],
        location: [null]
      });
    }
  
    onSubmitForm(): void {
      console.log(this.serieForm.value);
    }
}
