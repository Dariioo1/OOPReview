import { Mobile } from "./mobile";

let movil1:Mobile = new Mobile ("Nokia", "Nokia 3210", "Si" , 2 , "Rojo", "No" , 0,50);
let movil2:Mobile = new Mobile("Iphone", "Iphone 3G", "Si" , 323 , "Azul", "No" , 2,345);
let movil3:Mobile = new Mobile("Samsung", "Galaxy 10" , "Si" , 34, "Verde" , "No" , 5,567)

console.log(movil1);
console.log(movil2);
console.log(movil3);

movil1.setIs5G("Si");
movil1.setCameraNumber(4)

console.log(movil1);

let moviles:Mobile[] = [movil1, movil2 , movil3];

for(let i=0;i<moviles.length;i++)
{
    moviles[i].printMobile();
}




