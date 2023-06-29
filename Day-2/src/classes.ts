interface IHero{
    title:string;
    fullname():string;

}

class Person{
    constructor(public canwalk:string){

    }
}
class Hero extends Person implements IHero{
    
    static version:number= 1001;

    constructor(public title:string,
    private _firstname:string,
    private _lastname:string, cwn:string){
        
        super(cwn);
    }
    fullname(): string {
        return this._firstname+" " +this._lastname;
    }
    
    get firstname(){
        return this._firstname;
    }

    set firstname(nfirstname:string){
        this._firstname= nfirstname;
    }

    get lastname(){
        return this._lastname;
    }
    set lastname(nlastname:string){
        this._lastname=nlastname;
        
    }
    
}
let hero= new Hero("Batman", "Petar", "Parkar", "I can fly");
console.log(hero);
console.log(hero.fullname());
