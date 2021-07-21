export class Mobile
{
    private name: string;
    private model:string;
    private tramedark:string;
    private sdSize:number;
    private color:string;
    private is5G: string;
    private cameraNumber: number;
    private price:number;

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
    public getName():string
    {
        return this.name
    }
    public getModel():string
    {
        return this.model
    }
    public getTramedark():string
    {
        return this.tramedark
    }
    public getSdize():number
    {
        return this.sdSize
    }
    public getColor():string
    {
        return this.color
    }
    public getIs5G():string
    {
        return this.is5G
    }
    public getCameraNumber():number
    {
        return this.cameraNumber;
    }
    public getPrice():number
    {
        return this.price;
    }
    public setName(name:string)
    {
        this.name=name;
    }
    public setModel(model:string)
    {
        this.model=model;
    }
    public setTramedark(tramedark:string)
    {
        this.tramedark=tramedark;
    }
    public setSdSize(sdSize:number)
    {
        this.sdSize=sdSize
    }
    public setColor(color:string)
    {
        this.color=color;
    }
    public setIs5G(is5G:string)
    {
        this.is5G = is5G;
    }
    public setCameraNumber(cameraNumber:number)
    {
        this.cameraNumber=cameraNumber;
    }
    public setPrice(price:number)
    {
        this.price=price;
    }
    public printMobile()
    {
        console.log(`The characteristics of the mobile ${this.name} are: \n Name: ${this.name} \n Model: ${this.model} \n TradeMark: ${this.tramedark} \n SD Size: ${this.sdSize} \n Color: ${this.color} \n Is 5g?: ${this.is5G} \n Number of Cameras: ${this.cameraNumber}`);
        
    }
        
}