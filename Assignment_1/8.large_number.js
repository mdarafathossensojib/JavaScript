const numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

let largeNumber = numbers[0];

for(let num of numbers){
    if(num > largeNumber){
        largeNumber = num;
    }
}

console.log(largeNumber);