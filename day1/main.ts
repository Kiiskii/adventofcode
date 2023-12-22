import fs from 'fs';


function getNumber(line: string){

    let firstNumber: number | null = null;
    let lastNumber: number | null = null;

    for(let value of line){
        if(/\d/.test(value)){
            const currentNumber = Number(value);
            if(firstNumber === null){
                firstNumber = currentNumber;
        }
            lastNumber = currentNumber;
        }
    }
    if (firstNumber !== null && lastNumber !== null){
        const combinedNumber = Number(`${firstNumber}${lastNumber}`);
        return combinedNumber;
    }
    return null;
}

let sum = 0;

fs.readFile('data.txt', 'utf8', (err, data) => {
    if(err){
        console.log(err);
        return;
    }
    const lines = data.split('\n');
    for(let line of lines){
       const a =  getNumber(line);
       if(a !== null){
           sum += a;
       }
    }
    console.log(sum);
});
