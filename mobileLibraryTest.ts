import { Mobile } from "./mobile";
import { MobileLibrary } from "./mobileLibray";

let Nokia:Mobile = new Mobile("Nokia", "3210", "Nokia 3210" , 23, "Azul" , "True" , 1,455);
let Iphone:Mobile = new Mobile ("Iphone" , "3G" , "Iphone 3G" , 54 , "Negro" , "False" ,2,454);
let Samsung:Mobile = new Mobile("Samsung" , "S10" , "Samsung S10" , 98 , "Rojo" , "True" , 3,232);

let moviles = [Nokia , Iphone , Samsung];

let libreria = new MobileLibrary("BlackBerry" , "Madrid", moviles)

console.log(libreria.getMobiles());
console.log(libreria.getLocation());
console.log(libreria.getName());

libreria.printLibrary();


