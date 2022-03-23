export default function pangram(letter) {
  let newcadena = letter
      .toLowerCase()
      .replace('á','a').replace('ä','a')
      .replace('é','e').replace('ë','e')
      .replace('í','i').replace('ï','i')
      .replace('ó','o').replace('ö','o')
      .replace('ú','u').replace('ü','u');
      
  let abc = 'abcdefghijklmnñopqrstuvwxyz'.split('');
  for(let car of abc){
    if(!newcadena.includes(car)) return false;
  }
  return true;
}