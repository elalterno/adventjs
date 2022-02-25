export default function sumPairs(numbers, result) {
  let indexj, r = new Array(2);
  for(let i = 0;i<numbers.length;i++){
    if (i===0){
      indexj = numbers.length;
    }
    else{
      indexj = numbers.length;
    }
    
    for(let j = i+1;j<indexj;j++){
      if(numbers[i] + numbers[j] == result){
        r = [numbers[i],numbers[j]];
        return r;
      }
    }
  }
  return null;
}  