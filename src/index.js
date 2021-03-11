
// Min()
exports.min = function min (array) {
    if ( array==''|| array==null ){
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
    if ( array==''|| array==null ){
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

// Avg()
exports.avg = function avg (array) {
    if ( array==''|| array==null ){
        return 0;
    }
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum = sum + array[i];
    }
	return sum/array.length
}
