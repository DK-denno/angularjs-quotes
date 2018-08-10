import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
    @Input() quote: 'quote';
    @Output() addquote = new EventEmitter<Quotes>();

   freshQuote = new Quotes(0, '', '', new Date());
    submitform() {
      this.addquote.emit(this.freshQuote);
    }



  constructor() { }

  ngOnInit() {
  }

}
