import { Component, OnInit ,  } from '@angular/core';
import { Quotes } from '../quotes';
import { Like } from '../like';

@Component({
  selector: 'app-input-details',
  templateUrl: './input-details.component.html',
  styleUrls: ['./input-details.component.css']
})
export class InputDetailsComponent implements OnInit {

  quotes = [
    new Quotes(0, 'dennis', 'aiyayayayay', new Date() ),
    new Quotes(0, 'dennis', 'aiyayayayay', new Date() ),

  ];

  addQuote(quote) {
       const quoteLength = this.quotes.length;
       quote.id = quoteLength + 1;
       this.quotes.push(quote);

  }

  like() {
    alert('You liked this quote');
  }
  dislike() {
    alert('You disliked this quote this quote');
  }

  constructor() { }

  ngOnInit() {
  }

}
