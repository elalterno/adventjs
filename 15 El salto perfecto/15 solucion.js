export default function checkSledJump(heights) {
  let lastValue;
  let maximo = Math.max(...heights);
  let idxmax = heights.indexOf(maximo);
  if (heights[idxmax] === heights.length)return false;
  for (let i = 1; i < idxmax; i++) {
    lastValue = heights[i-1];
    if (heights[i] === lastValue){
      return false;
    }

    if (lastValue > heights[i]){
      return false;
    }
  }

  for (let i = idxmax+1; i <= heights.length ; i++) {
    lastValue = heights[i-1];
    if (heights[i] === lastValue){
      return false;
    }

    if (lastValue < heights[i]){
      return false;
    }
  }  
  return true;
}