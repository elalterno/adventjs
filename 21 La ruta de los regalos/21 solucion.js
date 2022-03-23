export default function canCarry(capacity, trip) {
  let dict = {};
  for (let i = 0; i < trip.length; i++) {
    const current = trip[i];
    if (current[0] > capacity) return false;

    for(let j=trip[i][1]; j<trip[i][2]; j++){
      if (dict[j]){
        dict[j]+= trip[i][0];
        if(dict[j] > capacity) return false;
      }
      else dict[j] = trip[i][0];
    }
  }
  return true;
}