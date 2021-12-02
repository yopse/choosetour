var readlineSync = require("readline-sync");

var userName = readlineSync.question("What's your name ? ");



console.log("Hi " + userName + " let's take the things to the next level");


console.log(" “Life is an adventure, not a package tour” – Eckhart Tolle ");


var conone = readlineSync.question("please tell us your favorite continent among A. asia  B. europe C. africa ?");




if(conone==="europe")
{
 console.log('WoW you have deep interest in history.');

 console.log("You can visit these countries in Europe Austria, Austria, Czech Republic, Denmark, Estonia, Ireland,Uk, Switzerland.")

     console.log("Europe is well connected with all means of transport.")
}

else if(conone==="asia")
{
console.log('Congratulations you have deep interest in history and culture');

 
console.log("You can visit these countries in asia    India, China, Thailand, Japan, Indonesia, Nepal, Jordan, Vietnam")

console.log('Live the exploration make memories')

}

else 
{
console.log('Congratulations you have deep interest in history nature wildlife');

console.log("You can visit these countries in Africa Namibia, Kenya, SouthAfrica, Tanzania ,Madagascar ");
}




console.log("Happy journey");
