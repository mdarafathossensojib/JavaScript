
// Browser Console for Output

let year = prompt("Enter year:");
year = Number(year);

if (!Number.isInteger(year) || year < 0) {
  console.log("Invalid input!");
} 
else if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
  console.log(year + " is a leap year.");
} 
else {
  console.log(year + " is not a leap year.");
}
