export default function daysToXmas(date) {
  let date_f = new Date('2021-12-25');
  let month = date_f.getUTCMonth() + 1;
  let day = date_f.getDate();
  let year = date_f.getUTCFullYear();
  date_f = new Date(year + "/" + month + "/" + day);
  
  month = date.getUTCMonth() + 1;
  day = date.getDate();
  year = date.getUTCFullYear();    
  date = new Date(year + "/" + month + "/" + day);  
  
  let dia_milisegundos = 86400000;
  let dif_milisegundos = date_f - date;
  let days = (dif_milisegundos / dia_milisegundos) + 1;
  return parseInt(days.toFixed(0));
}