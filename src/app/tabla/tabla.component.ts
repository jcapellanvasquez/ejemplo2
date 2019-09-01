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
    //this.users$ = this.appService.getMyUsers()
  }

  ngOnInit() {

    // this.appService.setUser2(
    //   "angular",
    //   "angular",
    //   "angular",
    //   "angular"
    // ).subscribe(
    //   (next) => {
    //     console.log("Registro exitoso")
    //     this.users$ = this.appService.getMyUsers()
    //   },
    //   (error) => {
    //     console.log("Ocurrio un error")
    //   },
    //   () => { // complete
    //     console.log("Registro completado")
    //   }
    // )

    const observable = new Observable(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });

    console.log('just before subscribe');

    observable.subscribe({
      next(x) { console.log('value ' + x); },// exitoso
      error(err) { console.error('something wrong occurred: ' + err); },
      complete() { console.log('done'); }
    });

    console.log('just after subscribe');
  }



}
