import { Component } from '@angular/core';
import { Router } from '@angular/router';
import{ NgForm } from '@angular/forms';

@Component({
  selector: 'app-langing-page',
  templateUrl: './langing-page.component.html',
  styleUrls: ['./langing-page.component.scss']
})
export class LangingPageComponent {

  userEmail!: string ;

  constructor (private route: Router){ }

  ngOnInit(): void{

  }

  onContinue(){
    this.route.navigateByUrl('facesnaps');
  } 

  onSubmitForm(form: NgForm): void{
    console.log(form.value);
  }

}
