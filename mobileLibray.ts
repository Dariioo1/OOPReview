import { Mobile } from './mobile';

export class MobileLibrary
{
    private name:string;
    private location:string;
    private mobiles:Mobile[];
    private totalPrice:number;

    constructor(name:string, location:string, mobiles:Mobile[])
    {
        this.name=name;
        this.location=location;
        this.mobiles=mobiles;
        this.totalPrice=this.totalPriceCalculation()
    }
    public getName():string
    {
        return this.name;
    }
    public getLocation():string
    {
        return this.location;
    }
    public getMobiles():Mobile[]
    {
        return this.mobiles;
    }
    public getTotalPrice():number
    {
        return this.totalPrice;
    }
    public setName(name:string)
    {
        this.name=name;
    }
    public setLocation(location:string)
    {
        this.location=location;
    }
    public setMobiles(mobiles:Mobile[])
    {
        this.mobiles=mobiles;
    }
    public setTotalPrice(totalPrice:number)
    {
        this.totalPrice=totalPrice;
    }
    public totalPriceCalculation():number
    {
        let precio:number =0;

        for(let i=0; i<this.mobiles.length;i++)
        {
            precio+= this.mobiles[i].getPrice()
        }
        return precio;
    }
    public printLibrary()
    {
        console.log("\n" + "This is all my mobiles:");
        for(let i = 0; i<this.mobiles.length;i++)
        {
            console.log("The charactetistics of the mobile " + this.mobiles[i].getName() + " are:");
            console.log("Name: " + this.mobiles[i].getName());
            console.log("Model: " + this.mobiles[i].getModel());
            console.log("Trademark: " + this.mobiles[i].getTramedark());
            console.log("SD Size: " + this.mobiles[i].getSdize());
            console.log("Is 5g?: " + this.mobiles[i].getIs5G());
            console.log("Number of Cameras: " + this.mobiles[i].getCameraNumber() + "\n"); 
            console.log("Price overall" + this.getTotalPrice());
        }        
    }
}