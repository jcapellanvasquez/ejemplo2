import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public nombre: string = ""
  public apellido: string = ""

  constructor(
    public appService: AppService
  ) { }

  ngOnInit() {
  }

  add() {
    this.appService.persona = {
      nombre: this.nombre,
      apellido: this.apellido
    }
  }

}
