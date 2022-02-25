export default function createXmasTree(height) {
  let base = '';
  let linea = '';
  let forma = height - 1;
  let formb = 1;

  for(let i=1;i<=2;i++){
   base = base + '_'.repeat(forma) + '#'.repeat(formb) + '_'.repeat(forma) + '\n';
  }
  
  for(let i=1;i<=height;i++){
    linea = linea + '_'.repeat(forma) + '*'.repeat(formb) + '_'.repeat(forma) + '\n';
    forma = forma -1;
    formb = formb + 2;
  }
  return linea + base.substr(0,base.length-1);
}