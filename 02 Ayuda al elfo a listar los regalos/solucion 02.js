export default function listGifts(letter) {
  const a = letter.trim().split(' ').filter(b => b[0] !== '_');
 var s = a.reduce(function(result, item, index){
   if (result[item] != result[index]) {
        result[item] ++;
    } else {
        result[item] = 1;
    }
    return result;
}, {}); 
  return s;
}