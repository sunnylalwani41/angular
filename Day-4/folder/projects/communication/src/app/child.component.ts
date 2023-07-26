// import { outputAst } from "@angular/compiler";
import { Component, EventEmitter, Input, Output } from "@angular/core";
// import { NodeStyleEventEmitter } from "rxjs/internal/observable/fromEvent";

@Component({
    selector: "app-child",
    
    template: `
    <div>
        <h2>Child Component</h2>
    
        <ng-content></ng-content>
        <hr>
        <ng-content select="h3"></ng-content>
        <hr>
        <ng-content select=".box"></ng-content>
        <ng-content select=".box"></ng-content>
        <hr>
        <ng-content select=".box"></ng-content>
        <hr>
        <ng-content select="#apptitle"></ng-content>
        <hr>
        <ng-content select="li.x"></ng-content>
        <h4> quantity: {{quantity}}</h4>
        <input #ti type=text/>
        <button (click)=clickHandler(ti.value)>click</button>
    </div>
    `
})
export class ChildComponent{
    @Input() quantity:number=0;
    @Output() childEvent:EventEmitter<any> = new EventEmitter();
    clickHandler(message:any){
        
        this.childEvent.emit(message);
    }
  

}