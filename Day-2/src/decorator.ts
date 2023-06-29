let addPower= (power:number)=>{
    return (targetClass:any)=>{
        return class{
            title:string = new targetClass().title;
            power:number = power;
        }
    }
}

@addPower(7)
class Commonman{
    title:string = "commonman";
}

let superman2= new Commonman();
// console.log(superman2.power);