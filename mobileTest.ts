import { Mobile } from "./mobile";

let Nokia3210:Mobile = new Mobile("Nokia", "Nokia 3210", "Si" , 2 , "Rojo", "No" , 0,50);
let Iphone3G:Mobile = new Mobile("Iphone", "Iphone 3G", "Si" , 323 , "Azul", "No" , 2,345);
let SamsungGalaxy10:Mobile = new Mobile("Samsung", "Galaxy 10" , "Si" , 34, "Verde" , "No" , 5,567);

console.log(Nokia3210);
console.log(Iphone3G);
console.log(SamsungGalaxy10);

Nokia3210.is5G="Si";
Nokia3210.cameraNumber=4;

console.log(Nokia3210);
console.log(Iphone3G);
console.log(SamsungGalaxy10);

