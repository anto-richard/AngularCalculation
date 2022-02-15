import { Component } from "@angular/core"

@Component({
    selector: 'Rectangle-Area',
    templateUrl:'./rectangle.components.html',
    styleUrls:['./rectangle.component.css']
})
export class RectangleComponent{
    length:number;
    breadth:number;
    area:number;
    constructor(){
        this.length=0;
        this.breadth=0;
        this.area =this.length * this.breadth;

    }
    onCalculate()
    {
        this.area =  this.length * this.breadth;
    }
}
