import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { observable , from  } from 'rxjs';

//Array  concept in the javascript
//SwichMap , mergeMap, contactMap


@Component({
  selector: 'app-observable-one',
  templateUrl: './observable-one.component.html',
  styleUrls: ['./observable-one.component.css']
})
export class ObservableOneComponent implements OnInit {

  constructor() { }

  

   SimOffers = [];
   SimName = "Jio";

   obSimOffers = [];
   ngOnInit(): void {
    this.SimOffers = ["50rs" , "100rs" , "200rs", "400rs"];
    // Case study ... I am imagene this data SimOffers which is i am getting from .net or java
    const obsSimoffers =  from(this.SimOffers);  // this plan
   
    obsSimoffers.subscribe(x=>{
      this.obSimOffers.push(x);
    })
    //subscription

    // const mysimoffers = [];
    //  mysimoffers
  }
  

  //Synchrous data..
  


  //you have to convert this data into the obseravable...




  //SimOffers.subscribe();



  //SimOffers =  http.get('http:myApplicationname.com/123');
 //Asynchronous data....








}
