let commonman= {
    title: "Bruce"
}
let addpower = (power:number)=>{
    return (commonman:any)=>{
        return {
            title: commonman.title,
            power: power
        }
    }
}
let superman = addpower(9)(commonman);
console.log(superman);