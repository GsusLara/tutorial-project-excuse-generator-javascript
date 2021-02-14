let who = ['the dog','my granma','the turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

let opwho=Math.floor(Math.random() * (4 - 0)) + 0;
let opwhat=Math.floor(Math.random() * (4 - 0)) + 0;
let opwhen=Math.floor(Math.random() * (5 - 0)) + 0;

document.write('<h1 id="textaleatorio">'+who[opwho]+' '+what[opwhat]+' my homework '+when[opwhen]+'<h1>');