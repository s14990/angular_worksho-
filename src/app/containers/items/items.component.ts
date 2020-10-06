import { HttpResponseModel, DataGridItemModel, FieldTypes } from './../../utils/models';
import { ItemsService } from './../../services/items.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, identity } from 'rxjs';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  data: any[];
  cols: DataGridItemModel[] = [
    { key: 'title' },
    { key: 'price', type: FieldTypes.INPUT },
    { key: 'imgSrc', type: FieldTypes.IMAGE },
    { key: 'id', type: FieldTypes.BUTTON, header: 'remove' },
    { key: 'id', type: FieldTypes.BUTTON, header: 'more' },
  ];
  total: number;

  filters: BehaviorSubject<any> = new BehaviorSubject({
      itemsPerPage: 2,
      currentPage: 1
  });

  constructor(
    private itemsService: ItemsService,
    private router: Router
  ) {
  }

  ngOnInit(): void {

    this.filters.subscribe((value) => {
      this.fetchItems();
    });

  

    this.fetchItems();
  }

  private fetchItems() {
    this.itemsService.fetch(this.filters.value).subscribe((resp: HttpResponseModel) => {
      this.data = resp.data;
      this.total = resp.total;
    });
  }

  dgAction({ typ, id }) {
    switch (typ) {
      case 'remove':
        this.itemsService.remove(id).subscribe((resp) => {
          console.log(resp);
        });
        break;
      case 'more':
        this.router.navigateByUrl('/items/' + id)
        break;
      default:
        break;
    }
  }


  updateFilters(value){
    this.filters.next({
      ...this.filters.value,
      itemsPerPage: value
    });
  }
}
