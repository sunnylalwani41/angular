import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <fieldset>
      <legend>ngFor Directive with sequence element</legend>
      <ol>
        <li *ngFor= "let hero of avengers">{{hero}}</li>
      </ol>
    </fieldset>
    <fieldset>
      <legend>ngFor Directive with index</legend>
      <div *ngFor="let hero of avengers; index as idx; first as fst; last as lst; even as e; odd as o">
        {{idx + 1}}
        <span *ngIf="fst">First avenger : </span>
        <span *ngIf="lst">Last avenger : </span>
        <ng-template [ngIf]="!lst && !fst">In between avenger : </ng-template>
        <ng-template [ngIf]="o"> Odd avenger : </ng-template>
        <ng-template [ngIf]="e"> Even avenger : </ng-template>
        {{hero}}
      </div>
    </fieldset>
    <fieldset>
      <legend>ngForOf Directive with Single element</legend>
      <ng-template ngFor let-hero [ngForOf]="avengers">{{hero}}</ng-template>
    </fieldset>
    <fieldset>
      <legend>
        *ngSwitch Directive
      </legend>
      <input #tr type="range"  min=0 max=5 [value]="rateing" (input)="rateing = tr.value">{{rateing}}
      <div [ngSwitch]="rateing">
        <h3 *ngSwitchCase="1" class= "rateing">*</h3>
        <h3 *ngSwitchCase="2" class= "rateing">**</h3>
        <h3 *ngSwitchCase="3" class= "rateing">***</h3>
        <h3 *ngSwitchCase="4" class= "rateing">****</h3>
        <h3 *ngSwitchCase="5" class= "rateing">*****</h3>
        <h3 *ngSwitchDefault class= "rateing">Not Rated</h3>
      </div>
    </fieldset>
    <fieldset>
      <legend>ngNonBindable Directive</legend>
      <!-- <h3>{{hello masai}}</h3> -->
      <h3>{{"hello masai"}}</h3>
      <h3>"{{" hello masai "}}"</h3>
      <h3>"{{" 'hello masai' "}}"</h3>
      <h3 ngNonBindable>{{ hello masai }}</h3>
    </fieldset>

    <fieldset>
      <legend> ngStyle Directive </legend>
      
      <p [style]="styleprop">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore libero fugiat molestias consequuntur pariatur accusamus soluta, nisi nemo cupiditate delectus inventore qui modi voluptatibus ex temporibus veritatis vero iusto vel!</p>
      <p [style.backgroundColor]="bgcol1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore libero fugiat molestias consequuntur pariatur accusamus soluta, nisi nemo cupiditate delectus inventore qui modi voluptatibus ex temporibus veritatis vero iusto vel!</p>
      <!-- <p [style.backgroundColor]="yellow">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore libero fugiat molestias consequuntur pariatur accusamus soluta, nisi nemo cupiditate delectus inventore qui modi voluptatibus ex temporibus veritatis vero iusto vel!</p> -->
      <p [ngStyle]= "{ 'color': 'darkblue', 'background-color': 'cyan' }" >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore libero fugiat molestias consequuntur pariatur accusamus soluta, nisi nemo cupiditate delectus inventore qui modi voluptatibus ex temporibus veritatis vero iusto vel!
      </p>
      <p [ngStyle]= "{ 'color': 'darkblue', 'background-color': bgcol1 }" >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore libero fugiat molestias consequuntur pariatur accusamus soluta, nisi nemo cupiditate delectus inventore qui modi voluptatibus ex temporibus veritatis vero iusto vel!
      </p>
      <p [ngStyle]= "{ 'background-color': rateing >2 ? 'yellow' : 'goldenrod' }" >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore libero fugiat molestias consequuntur pariatur accusamus soluta, nisi nemo cupiditate delectus inventore qui modi voluptatibus ex temporibus veritatis vero iusto vel!
      </p>
      <p [ngStyle]= "{ 'background-color': rateing >2 ? bgcol2 : bgcol3 }" >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore libero fugiat molestias consequuntur pariatur accusamus soluta, nisi nemo cupiditate delectus inventore qui modi voluptatibus ex temporibus veritatis vero iusto vel!
      </p>
      <p [ngStyle]= "{ 'background-color': rateing >2 ? 'yellow' : 'goldenrod' }" >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore libero fugiat molestias consequuntur pariatur accusamus soluta, nisi nemo cupiditate delectus inventore qui modi voluptatibus ex temporibus veritatis vero iusto vel!
      </p>
      

    </fieldset>
    <fieldset>
      <legend> ngClass Directive </legend>
      
      
       <p [ngClass]= "{ redBox : rateing>3 }" >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore libero fugiat molestias consequuntur pariatur accusamus soluta, nisi nemo cupiditate delectus inventore qui modi voluptatibus ex temporibus veritatis vero iusto vel!
      </p>
      <p [ngClass]= "{ redBox : rateing>2, blueBox : rateing>4 }" >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore libero fugiat molestias consequuntur pariatur accusamus soluta, nisi nemo cupiditate delectus inventore qui modi voluptatibus ex temporibus veritatis vero iusto vel!
      </p>
      <p [ngClass]= "{ blueBox : rateing>0, redBox : rateing>3 }" >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore libero fugiat molestias consequuntur pariatur accusamus soluta, nisi nemo cupiditate delectus inventore qui modi voluptatibus ex temporibus veritatis vero iusto vel!
      </p>

    </fieldset>
  `,
  styles: [
    `.rateing{
      font-family: arial;
      margin: 0px;
      color: goldenrod;
    }
    .redBox{
      width: 310px;
      font-family: arial;
      background-color: red;
      text-align: justify;
    }
    .blueBox{
      width: 310px;
      font-family: arial;
      background-color: blue;
      text-align: justify;
    }
    `    
  ]
})
export class AppComponent {
  title = 'step1-directives';
  avengers= ["Ironman","Spiderman","Hulk","Thor","Dr Strange","Captain America","Black Widow","Hawkeye","Groot","Antman"];
  rateing:any=3;
  bgcol1="green";
  bgcol2="red";
  bgcol3="darkorange";
  styleprop="width: 300px; font-family: arial; background-color: silver; margin: auto; border: 1px solid darkslategrey; padding: 10px"
}
