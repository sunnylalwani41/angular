import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1> Inbuild Pipes </h1>
    <hr>
    <fieldset>
      
      <!--<ng-template ngFor let-hero [ngForOf]="avengers" > {{hero.title}}</ng-template>-->
      <!-- <ol>
        <li *ngFor="let hero of avengers">{{hero.title}}</li>
      </ol>-->
    
    </fieldset>
    <div class="container">
      <legend>
        Avengers
      </legend>
      <table class="table table-striped table-hover table-sm">
      
      <thead class="table-dark">
        <tr>
          <th>Sl#</th>
          <th>Title</th>
          <th>Images</th>
          <th>Full Name</th>
          <th>City</th>
          <th>Ticket Price</th>
          <th>Release Date</th>
          <th>Movie List</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor= "let hero of heros">
          <td>{{hero.sl}}</td>
          <!-- <td>{{hero.title.toUpperCase().toLowerCase()}}</td> -->
          
          <td>{{hero.title | uppercase | lowercase | titlecase}}</td>
          <!-- Pipe Chaining -->
          <td>
            <img [src]="hero.poster" alt={{hero.title}}  width=40px/>
          </td>
          <td>{{hero.firstname +" "+ hero.lastname}}</td>
          <td>{{hero.city}}</td>
          <!-- <td>{{hero.ticketprice | currency : "INR" }}</td> -->
          <!-- <td>{{hero.ticketprice | currency : "INR" : "code" }}</td> -->
          <!-- <td>{{hero.ticketprice | currency : "INR" : true : "1.0" }}</td> -->
          <td>{{hero.ticketprice | currency : "INR" : true : "1.0-0" }}</td>
          
          <!-- <td>{{hero.releasedate | date : "short" }}</td> -->
          <!-- <td>{{hero.releasedate | date : "dd:MMM:YYYY" }}</td> -->
          <td>{{hero.releasedate | date : "dd:MMMM:yyyy" }}</td>
          <td>
            <!-- <button style="width:100px">{{hero.movieslist.length}}</button>-->
            <button class="masaibtn btn btn-primary">{{hero.movieslist.length}}</button>
          </td>
        </tr>
      </tbody>
    </table>
    
    </div>
    <p *ngFor="let hero of heros | keyvalue"> {{hero.key+ " "+ hero.value}} </p>
    <p *ngFor="let hero of heros[0] | keyvalue"> {{hero.key+ " "+ hero.value}} </p>
    <p> {{heros[0] | json}}</p>
    <!-- It is use for debugging purpose because we know that what should be answer  -->
    <p>B: {{5 | percent:'4.3-5'}}</p>
  `,
  styles: [
    `.masaibtn{
      width: 100px;

    }`
  ]
})
export class AppComponent {
  title = 'step2-pipes';
  heros= [{
    "sl": 1,
    "title": "Batman",
    "gender": "male",
    "firstname": "Bruce",
    "lastname": "Wayne",
    "city": "Gotham",
    "ticketprice": 123.4567,
    "releasedate": "1/26/2018",
    "poster": "assets/images/batman.jpg",
    "movieslist": [
        {
            "title": "Batman Begins",
            "poster": "assets/images/bat1_tn.jpg"
        }, {
            "title": "Dark Knight",
            "poster": "assets/images/bat2_tn.jpg"
        }, {
            "title": "Dark Knight Raises",
            "poster": "assets/images/bat3_tn.jpg"
        }
    ]

},
{
    "sl": 2,
    "title": "Superman",
    "gender": "male",
    "firstname": "Clark",
    "lastname": "Kent",
    "city": "Metropolis",
    "ticketprice": 178.6789,
    "releasedate": "1/27/2018",
    "poster": "assets/images/superman.jpg",
    "movieslist": [
        {
            "title": "Superman The Movie",
            "poster": "assets/images/super1_tn.jpg"
        }, {
            "title": "Superman Returns",
            "poster": "assets/images/super2_tn.jpg"
        }, {
            "title": "Superman Man of Steel",
            "poster": "assets/images/super3_tn.jpg"
        }
    ]

},
{
    "sl": 3,
    "title": "Ironman",
    "gender": "male",
    "firstname": "Tony",
    "lastname": "Stark",
    "city": "New York",
    "ticketprice": 122,
    "releasedate": "1/27/2018",
    "poster": "assets/images/ironman.jpg",
    "movieslist": [
        {
            "title": "Ironman",
            "poster": "assets/images/iron1_tn.jpg"
        }, {
            "title": "Ironman 2",
            "poster": "assets/images/iron2_tn.jpg"
        }, {
            "title": "Ironman 3",
            "poster": "assets/images/iron3_tn.jpg"
        }
    ]

}, {
    "sl": 4,
    "title": "Phantom",
    "gender": "male",
    "firstname": "Kit",
    "lastname": "Walker",
    "city": "Bhangala",
    "ticketprice": 98.6456,
    "releasedate": "1/27/2018",
    "poster": "assets/images/phantom.jpg",
    "movieslist": [
        {
            "title": "The Phantom Slam Evilz",
            "poster": "assets/images/phantom1_tn.jpg"
        }
    ]

}, {
    "sl": 5,
    "title": "Spiderman",
    "gender": "male",
    "firstname": "Peter",
    "lastname": "Parker",
    "city": "New York",
    "ticketprice": 1.3456,
    "releasedate": "9/26/2018",
    "poster": "assets/images/spiderman.jpg",
    "movieslist": [
        {
            "title": "Spiderman",
            "poster": "assets/images/spider1_tn.jpg"
        }, {
            "title": "Spiderman 2",
            "poster": "assets/images/spider2_tn.jpg"
        }, {
            "title": "Spiderman 3",
            "poster": "assets/images/spider3_tn.jpg"
        }
    ]
},
{
    "sl": 6,
    "title": "Wonder Women",
    "gender": "female",
    "firstname": "Princess",
    "lastname": "Diana",
    "city": "Amazon",
    "ticketprice": 341.3456978978,
    "releasedate": "11/26/2018",
    "poster": "assets/images/wonderwoman.jpg",
    "movieslist" : []
}];
}
