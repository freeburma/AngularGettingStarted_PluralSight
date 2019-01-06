import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'pm-star', 
    templateUrl: './star.component.html', 
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges
{
    @Input() rating: number; // Input from product list
    starWidth: number;
    @Output() ratingClicked: EventEmitter <string> = new EventEmitter<string>(); 

    ngOnChanges(): void 
    {
        this.starWidth = this.rating * 75 / 5;
    }// end ngOnChanges()

    onClick(): void 
    {
        // console.log(`The rating ${this.rating} was clicked`);
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
    }// end onClick()
}