import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quote[index].name}?`)

      if (toDelete){
        this.quote.splice(index,1)
      }
    }
  }
  
  quote: Quote[] = [
    new Quote(1, 'The way to get started is to quit talking and begin doing.', '',new Date(2020,3,14)),
    new Quote(2,'If life were predictable it would cease to be life, and be without flavor','',new Date(2020,3,14)),
    new Quote(3,'Whoever is happy will make others happy too.','',new Date(2020,3,14)),
    new Quote(4,'You will face many defeats in life, but never let yourself be defeated.','',new Date(2020,3,14)),
    new Quote(5,'Never let the fear of striking out keep you from playing the game.','',new Date(2020,3,14)),
  ];
  toggleDetails(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }
   
  completeQuote(isComplete, index){
    if (isComplete) {
      this.quote.splice(index,1);
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quote.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quote.push(quote)
  }

  constructor() { }

  ngOnInit() {
  }

}
