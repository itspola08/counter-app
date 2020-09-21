import { Component, Input, OnInit , OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() counterParent:number;// esto se recibe del padre este input 

  constructor() { }

  ngOnChanges(changes:SimpleChanges){
    console.log(changes);
  }

  ngOnInit(): void {
  }

}
