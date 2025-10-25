const array = [5, 4, 3, 1, 2, 20, 6, 18, 8, 19, 7, 17, 16, 9, 15, 10, 13, 10, 11, 12, 14];

for(let i=0; i<array.length; i++){
    for(let j=0; j<array.length; j++){
        if(array[i] < array[j]){
            let tmp = array[i];
            array[i] = array[j];
            array[j] = tmp;
        }
    }
}

console.log(array);