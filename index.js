function secondlargestNumber(numbers) {
    let first = numbers [0];
    let second = 0;
    for (let i=0; i < numbers.length; i++){
    if (numbers [i] > first) {
        seconds = first;
        first = numbers[i]

    }
     if (numbers[i] > seconds && numbers [i] < first) {
         seconds = numbers[i];
     }
    }
return second
}

let nums = [8, 4, 6, 10, 9, 11]
console.log(secondLarguestNumber(nums))