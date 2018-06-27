var animal = 'dog'

function myAnimal() 
{
  return animal 
}

function yourAnimal() 
{
  var animal = 'cat'
  return animal
}

function add2(n) 
{
  const two = 2;
  return n + two
}

var funkyFunction = function outsideFunction() {
   
   return function insideFunction() {
      return 'FUNKY!'
   }
}

console.log(funkyFunction()());
// We want to set theFunk equal to "FUNKY!" using our funkyFunction

//var theFunk = funkyFunction();

