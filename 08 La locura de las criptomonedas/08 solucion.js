export default function maxProfit(prices) {
  let max = -1;
  for(let i=0; i<prices.length; i++){
    for(let j=i+1; j<prices.length; j++){
      if(prices[j] - prices[i] > max && prices[j] - prices[i] !== 0){
        max = prices[j] - prices[i];
      }
    }  
  }
  return max;
}