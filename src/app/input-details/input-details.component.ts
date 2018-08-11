import { Component, OnInit ,  } from '@angular/core';
import { Quotes } from '../quotes';
import { Like } from '../like';

@Component({
  selector: 'app-input-details',
  templateUrl: './input-details.component.html',
  styleUrls: ['./input-details.component.css']
})
export class InputDetailsComponent implements OnInit {
  likes = [
    new Like('1');
  ];

  quotes = [
    new Quotes(0, 'dennis', 'aiyayayayay', new Date() ),
    new Quotes(0, 'dennis', 'aiyayayayay', new Date() ),
    new Quotes(0, 'dennis', 'aiyayayayay', new Date() ),
    new Quotes(0, 'dennis', 'aiyayayayay', new Date() ),
    new Quotes(0, 'dennis', 'aiyayayayay', new Date() ),
    new Quotes(0, 'dennis', 'aiyayayayay', new Date() ),
  ];

  addQuote(quote) {
       const quoteLength = this.quotes.length;
       quote.id = quoteLength + 1;
       this.quotes.push(quote);

  }
  constructor() { }

  ngOnInit() {
  }

}
