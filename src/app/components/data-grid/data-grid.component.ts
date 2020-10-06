import { ItemsService } from './../../services/items.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {

  @Input() data: any[];
  @Input() cols: any[];

  @Output() actionEvent: EventEmitter<any> = new EventEmitter();

  constructor(

  ) { }

  ngOnInit(): void {
  }

  action(type: string, id: string) {
    this.actionEvent.emit({ type, id })
  }
}
