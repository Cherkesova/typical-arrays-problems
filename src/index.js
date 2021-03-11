
// Min()
exports.min = function min (array) {
if (array === 0 || array === undefined){
  return 0;
}
let min = array[0];
let next;
for(let i = 0; i < array.length; i++){
	next = array[i];
	if (min > next){
		min = next;
	} 
}
return min;
}
// Max()
exports.max = function max (array) {

if (array === 0 || array === undefined){
  return 0;
}

let max = array[0];
let next;

for(let i = 0; i < array.length; i++){
	next = array[i];
	if (max < next){
		max = next;
	} 
}

return max;
}

exports.avg = function avg (array) {
  return 0;
}
