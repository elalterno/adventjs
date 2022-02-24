export default function contarOvejas(ovejas) {
  const a = ovejas.filter(item => item.color === 'rojo').filter(b => (b.name.includes('n') || b.name.includes('N')) && (b.name.includes('a') || b.name.includes('A')));
  return a;
}