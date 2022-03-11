export default function decodeNumber(symbols) {
  let translation = {'.': 1, ',': 5, ':': 10, ';': 50, '!': 100};
  let answer = 0;
  for (let i=0; i<symbols.length; i++){
    if (!translation[symbols[i]]) return NaN;

    if(translation[symbols[i]] < translation[symbols[i+1]] &&  i+1 <= symbols.length){
        answer -= translation[symbols[i]];
    }
    else{
      answer += translation[symbols[i]];
    }
  }
  return answer;
}