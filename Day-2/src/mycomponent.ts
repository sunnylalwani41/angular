let component = (config:any)=>{
    return function(targetClass:any){
        let tc = new targetClass();
        return class{
            title:string= tc.title;
            power:number= config.power;
            selector:string = config.selector;
            template:string = config.template;
        }
    }
}
@component({
    power: 100,
    selector: "app-root",
    template: `
    <div>
        <h2>{{title}}</h2>
        <ul>
            <li>List Item 1 </li>
            <li>List Item 2 </li>
            <li>List Item 3 </li>
        </ul>
        <h2>{{power}}</h2>
    </div>
    `
})
class MyCom{
    title:string = "Welcome to your life";
}