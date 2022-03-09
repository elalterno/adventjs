export default function missingReindeer(ids) {
  ids.sort((a, b) => a - b);
  let as = ids.find((value, index) => value !== index);
  if (isNaN(as)){
    return ids.length;
  }
  else{
    return as-1;
  }
}