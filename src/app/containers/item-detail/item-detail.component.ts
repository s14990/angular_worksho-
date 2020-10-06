import { ItemsService } from './../../services/items.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  data: any;

  constructor(
    private route: ActivatedRoute,
    private ItemsService: ItemsService
  ) { }

  ngOnInit(): void {
    const id=this.route.snapshot.params.id;
    this.ItemsService.get(id).subscribe((resp)=> {
      this.data=resp.data;
    });
  }

}
