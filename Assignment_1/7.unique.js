const numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

const freq = new Map();

for(let i=0; i<numbers.length; i++){
    const num = numbers[i];
    if(freq.has(num)){
        freq.set(num, freq.get(num) + 1);
    }
    else{
        freq.set(num, 1);
    }
}

let uniqueValue = [];
for(let [key, value] of freq){
    if(value == 1){
        uniqueValue.push(key);
    }
}

console.log(uniqueValue);