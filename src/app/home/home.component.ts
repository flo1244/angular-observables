//OBSERVABLES 
//Observables can be thought of as a data source. In angular observable is an object we import from a third-party package RxJS. We have an observable and then a observer.
//In between we have a stream a timeline  we have multiple events emitted by the observable or data packages.
//the observable could emit data because you trigger it to do so.
// The observer is your code. The subscribe function we have 3 ways of handling datas. NORMAL, HANDLE ERROR, HANDLE COMPLETION. 
//Observables handle our asynchronous 


import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
//to prevent memory leak and slowing our site down by unecessary fires we store our subscription we can also implement onDestroy as well
  private firstObsSubscription: Subscription;
  constructor() { }

  //building our own observables. we are import interval wil fire new value every second. This observable is going to keep emitting this event until we unsubscribe to prevent memory leaks. 
  //Notice the count continues even when we go back to home but starts a new observable as well. 
  ngOnInit() {
    this.firstObsSubscription = interval(1000).subscribe(count => {
      console.log(count);
    });
  }

  //now we unsubscribe. we clear that subscription  prevent memory leaks because we are not keeping old subscriptions. 
  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe(); 
  }

}
