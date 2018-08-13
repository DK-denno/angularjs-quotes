import { Component, OnInit ,  } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-input-details',
  templateUrl: './input-details.component.html',
  styleUrls: ['./input-details.component.css']
})
export class InputDetailsComponent implements OnInit {

    quotes = [
    new Quotes(0, 'dennis', 'aiyayayayay', new Date(), 0, 0 ),
    new Quotes(0, 'dennis', 'aiyayayayay', new Date(), 0, 0 ),

  ];

  addQuote(quote) {
       const quoteLength = this.quotes.length;
       quote.id = quoteLength + 1;
       this.quotes.push(quote);

  }
  completequote(isComplete, index) {
      if (isComplete) {
          const toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`);
          if (toDelete) {
              this.quotes.splice(index, 1);
          }
      }
  }


  like(i) {
      this.quotes[i].likes += 1;

          console.log(this.quotes[i]);

  }
  dislike(i) {
    this.quotes[i].dislikes += 1;

        console.log(this.quotes[i]);
  }

  constructor() { }

  ngOnInit() {
  }

}
