export default function fixFiles(files) {
  let filesList = [];
  let dict = {};
  let as =[];
  for(let file of files){
    if (!filesList.includes(file)){  
      filesList.push(file);
      dict[file] = 0;
    }
    else{
      dict[file]++;
    } 
    if(dict[file] <= 0){
      as.push(file);
    }
    else{
      as.push(`${file}(${dict[file]})`);
    }
  }
  return as;
}