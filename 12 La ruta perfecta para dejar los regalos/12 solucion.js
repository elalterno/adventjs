export default function getMinJump(obstacles) {
  obstacles.sort((a, b) => a - b);

  for(let i=1; i<=obstacles[obstacles.length-1]; i++){
    let ans = true;

    for(let j=0; j<=obstacles[obstacles.length-1]; j += i){
      if(obstacles.includes(j)){
        ans = false;
      }
    }

    if(ans){ 
      return i; 
    }
  }
  return obstacles[obstacles.length - 1] + 1;
}