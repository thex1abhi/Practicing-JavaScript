  let adjective ={
    a:" Crazy ",
    b:"Amazing",
    c:"Fire"
 } 
 let shopname={
    a:"Engine",
    b:"Foods",
    c:"Garments"
 }
 let Anotherword ={
    a:"Bros",
    b:"Limited",
    c:"Hub"
 }

num=Math.random();
if(num<0.33){
   adjective="Crazy"
}
else if(num>0.33 && num<0.66){
   adjective="Amazing";
}
else {
   adjective="Fire";
}

 num=Math.random();
if(num<0.33){
   shopname="Engine";
}
else if(num>0.33 && num<0.66){
   shopname="Foods";
}
else {
   shopname="Garments";
}

 num=Math.random();
if(num<0.33){
   Anotherword="Bros";
}
else if(num>0.33 && num<0.66){
   Anotherword="Limited";
}
else {
   Anotherword="Hub";
}

console.log( `${adjective} ${shopname} ${Anotherword}`)
