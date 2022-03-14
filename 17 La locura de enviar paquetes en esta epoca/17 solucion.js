export default function countPackages(carriers, carrierID) {
 if(!result){
   var result = 0;
 }
  
  for (let carrier of carriers){

    if(carrier[0] === carrierID){
      result+= carrier[1];
      for(let sub of carrier[2]){
        result += countPackages(carriers, sub,result); //deberia ser result = countPackages(carriers, sub,result);
      }
    }
    
  } 
  return result;
}