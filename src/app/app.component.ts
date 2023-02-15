import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  // url style using a reference to a css file a there we can write our style

  // styleUrls: ['./app.component.css']

  // inline styling
  styles :[`h3{
    color: dodgerblue;
  }`]

})
export class AppComponent {
}
