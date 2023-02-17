import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-stars-rating',
  templateUrl: './stars-rating.component.html',
  styleUrls: ['./stars-rating.component.css'],
})
export class StarsRatingComponent implements OnChanges {
  @Input() rating = 0;
  cropWidth: number = 75;

  ngOnChanges(): void {
    this.cropWidth = (this.rating / 5) * 120;
    console.log(this.cropWidth);
    console.log(this.rating);
  }
}
