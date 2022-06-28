import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.css']
})
export class CustomObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let SimOffers:any = ["100rs" , null, undefined, "200rs" , "300rs" , "500rs" ];

    let ObsSimOffers = new Observable<any>((observer)=> {
          // setTimeout(() => {
          //   SimOffers.forEach((x)=>{
          //     if(x == null || x == undefined){
          //          observer.error("some unwanted data");
          //     }
          //     else{
          //      observer.next(x);
          //     }
          // })
          // }, 1000);

          //SimOffers
         //observer.next(SimOffers);

      });

    ObsSimOffers.subscribe(x=>{
       console.log(x);
    },
    (error)=>{
        console.log("Some exception was coming from Observable");
    }
    )

  }

}
