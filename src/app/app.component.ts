import { Component } from '@angular/core';
import { Quotes } from './quotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QUOTES';
  quotes = [
    new Quotes(0, 'dennis', 'aiyayayayay', new Date() ),
    new Quotes(0, 'dennis', 'aiyayayayay', new Date() ),
    new Quotes(0, 'dennis', 'aiyayayayay', new Date() ),
    new Quotes(0, 'dennis', 'aiyayayayay', new Date() ),
    new Quotes(0, 'dennis', 'aiyayayayay', new Date() ),
  ];

}
