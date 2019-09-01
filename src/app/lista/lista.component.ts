import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(
    private routerParams: ActivatedRoute,
    public router: Router
    ) { }

  ngOnInit() {
    this.routerParams.params.subscribe(
      params=>console.log(params["id"])
    )
  }

  home() {
    this.router.navigate(['/'])
  }

}
