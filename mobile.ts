export class Mobile
{
    public name: string;
    public model:string;
    public tramedark:string;
    public sdSize:number;
    public color:string;
    public is5G: string;
    public cameraNumber: number;
    public price:number;

    constructor(name:string, model:string, tramedark:string , sdSize:number, color:string, is5G:string, cameraNumber:number, price:number)
    {
        this.name=name;
        this.model=model;
        this.tramedark=tramedark;
        this.sdSize=sdSize;
        this.color=color;
        this.is5G=is5G;
        this.cameraNumber=cameraNumber;
        this.price=price;

    }

}