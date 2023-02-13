import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-langing-page',
  templateUrl: './langing-page.component.html',
  styleUrls: ['./langing-page.component.scss']
})
export class LangingPageComponent {

  constructor (private route: Router){ }

  ngOnInit(): void{

  }

  onContinue(){
    this.route.navigateByUrl('facesnaps');
  }

}
