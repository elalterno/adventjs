export default function learn(time, courses) {
   let suma, ii, jj;
  let tmp = 0;
  for(let i = 0; i< courses.length-1;i++){
    for(let j = 1; j< courses.length;j++){
      if(i === j)continue;
      suma = courses[i] + courses[j];
      if(suma === time){
        return [i, j];
      }
      if ((time-suma) < (time-tmp) && (time > suma)){
        tmp = suma;
        ii = i;
        jj = j;
      }
    }
  }
  if (tmp !== 0) return [ii, jj];
  else return null;
}