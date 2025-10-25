
let savings = (array, cost) => {
    if(!Array.isArray(array) || typeof cost != "number"){
        return "Invalid Input!";
    }

    let saves = 0;
    for(let money of array){
        if(money >= 3000){
            saves += money - ((money/100) * 20);
        }
        else{
            saves += money;
        }
    }
    saves -= cost;
    if(saves >= 0){
        return saves; 
    }
    return "earn more";
}

const ans = savings([900, 2700, 3400], 1000);

console.log(ans);