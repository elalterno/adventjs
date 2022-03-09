export default function wrapGifts(gifts) {
  if (gifts.length === 0 )return [];
  let base = gifts[0].length+2;
  let as = [];
  as.push('*'.repeat(base));
  for(let i=0; i<gifts.length; i++){
    let linea = '*' + gifts[i] + '*';
    as.push(linea);
  }
  as.push('*'.repeat(base));
  return as;
}