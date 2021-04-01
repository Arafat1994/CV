import { HostListener, Injectable } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WidthServiceService {

  resizeObservable$: Observable<Event>
  resizeSubscription$: Subscription  
  constructor() { 
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
     // console.log('event: ', evt)
    })
  }

  Width : number ; 
  onResize(event:any) {
   return this.Width =  event.target.innerWidth;
  }

}
