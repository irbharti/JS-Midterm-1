
let number1 = Number(prompt("Enter the first number: "));
let lastNumber = Number(prompt("Enter the last number: "));
let sum = 0;

function funct(numb1,numb2){
    for(let i=numb1;i<=numb2;i++){
        if(i%3!==0 || i%5!==0){
            sum=sum+i;
        }
    }
    console.log(`sum of numbers that are not divisible by 3 or 5 starting at "${numb1}" and ending at "${numb2}" is ${sum} `);
}

funct(number1,lastNumber);