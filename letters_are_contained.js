// array of length 2, function evaluates if all letters in array[1] are present in array[0]


function contains(ar) {
var w = ar[0].toLowerCase();
var e = ar[1].toLowerCase();

var v = Array.from(w);
var b = Array.from(e);

var counter = 0;
var index = 0;

while(counter <b.length){
var x = b[index];
var y = v.indexOf(x);
if(y < 0){
  return false;
}
index++;
counter++
}
return true;



 
}


