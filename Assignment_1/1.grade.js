// Browser Console for Output

let mark = prompt("Enter Your mark: ");
mark = Number(mark);

if(mark>=80 && mark<=100){
    console.log("A+");
}
else if(mark >= 70 && mark < 80){
    console.log("A");
}
else if(mark >= 60 && mark < 70){
    console.log("A-");
}
else if(mark >= 50 && mark < 60){
    console.log("B");
}
else if(mark >= 40 && mark < 50){
    console.log("C");
}
else if(mark >= 33 && mark < 40){
    console.log("D")
}
else if(mark >=0 && mark < 33){
    console.log("F");
}
else{
    console.log("Invalid Input!");
}
