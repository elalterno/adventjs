export default function shouldBuyFidelity(times) {
  const normal = 12 * times;
  let card = 250;

  for(let i=1; i<=times; i++) {
    card += 12 * Math.pow(.75, i);
  }
  return card<normal;
}