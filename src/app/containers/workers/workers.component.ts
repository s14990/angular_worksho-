import { Router } from '@angular/router';
import { WorkersService } from './../../services/workers.service';
import { Component, OnInit } from '@angular/core';
import { FieldTypes, HttpResponseModel } from 'src/app/utils/models';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss']
})
export class WorkersComponent implements OnInit {

  data: any[];
  cols: any[]=[
    {key: 'name', type: FieldTypes.INPUT},
    {key: 'phone', type: FieldTypes.INPUT},
    {key: 'category', type: FieldTypes.INPUT},
    { key: 'id', type: FieldTypes.BUTTON, header: 'remove' },
    { key: 'id', type: FieldTypes.BUTTON, header: 'more' },
  ];

  constructor(
    private workersService: WorkersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.workersService.fetch().subscribe((resp: HttpResponseModel) => {
      this.data = resp.data;
    })
      
  }

  dgAction({type,id}){
    switch (type) {
      case 'remove':
        this.workersService.remove(id).subscribe((resp) => {
          console.log(resp);
          alert(resp);
        });
        break;
      case 'more':
        this.workersService.get(id).subscribe((resp) => {
          console.log(resp);
        });
        break;
      default:
        break;
    }
  }

}
