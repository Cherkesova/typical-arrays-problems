
exports.min = function min (array) {
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

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  return 0;
}
