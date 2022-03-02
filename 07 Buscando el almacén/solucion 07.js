export default function contains(store, product) {
  let result = false;
  const contenido = Object.values(store);

  for(let i=0; i<contenido.length; i++) {
    if(typeof contenido[i] === 'string') {
      if(product === contenido[i]) {
        return true;
      }
    } else {
      result = contains(contenido[i], product);
    }
  }
  return result;
}