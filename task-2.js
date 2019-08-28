function birthdayCakeCandles(arr){
    let count =0;
    let maxValue = 0; 

    let valMax = Math.max.apply(null, arr); 
    for(let j = 0;j < arr.length; j++)
    {
     if(arr[j] == maxValue)
      {
         count++;
        }
    }
  return count;
} alert(birthdayCakeCandles([1, 3, 6, 7, 7, 6, 4, 7]));
