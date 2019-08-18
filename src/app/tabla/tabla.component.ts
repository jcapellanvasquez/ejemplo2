import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  public users$: Observable<any>;
  constructor(public appService: AppService) {
    this.users$ = this.appService.getUsers()
   }

  ngOnInit() {
  }

}
