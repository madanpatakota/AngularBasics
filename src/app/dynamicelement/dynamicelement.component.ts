import { Component, ElementRef, OnInit, 
  TemplateRef, 
  ViewChild, 
  ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-dynamicelement',
  templateUrl: './dynamicelement.component.html',
  styleUrls: ['./dynamicelement.component.css']
})
export class DynamicelementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  colorName = "red";

  templateName = "templateRefTwo";   // just imangeine this data coming from outside....

  //If i want to declare the element from html to ts file
  // what i have to do here....
  
  @ViewChild('templateRefOne') _templateRefOne:TemplateRef<any>;
  @ViewChild('templateRefTwo') _templateRefTwo:TemplateRef<any>;
  @ViewChild('containerRef',{ read : ViewContainerRef}) _ContainerRefOne:ViewContainerRef;

  // @ViewChild("textRef") textRef:ElementRef;


  
  evtSubmit(){



    if(this.templateName  == "templateRefOne"){
       this._ContainerRefOne.createEmbeddedView(this._templateRefOne);
    }

    if(this.templateName  == "templateRefTwo"){
      this._ContainerRefOne.createEmbeddedView(this._templateRefTwo);
    }

  }

}
