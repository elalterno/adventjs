export default function getCoins(change) {
  let coins = [];
  coins[0] = 1; 
  coins[1] = 2; 
  coins[2] = 5; 
  coins[3] = 10; 
  coins[4] = 20;
  coins[5] = 50;  
  let result = [0, 0, 0, 0, 0, 0];
  let saldo = change;
  while(saldo > 0){
    
    for(let i= 5;i>=0;i--){
      if(saldo - coins[i] >= 0){
        result[i] = result[i] + 1;
        saldo = saldo - coins[i];
        break;
      }
    }    
  };
  
  
  return result;
}
